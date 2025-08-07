import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import User from "./models/user.model.js"; // Assuming your User model is in models/user.model.js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.set("strictQuery", false); // Optional, avoids warning
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ MongoDB connected");

    // OPTIONAL: Drop username_1 index if needed (only run once)
    try {
      const indexes = await User.collection.indexes();
      const hasUsernameIndex = indexes.find((idx) => idx.name === "username_1");
      if (hasUsernameIndex) {
        await User.collection.dropIndex("username_1");
        console.log("🗑️ Dropped index 'username_1'");
      }
    } catch (error) {
      console.error("⚠️ Error dropping index:", error.message);
    }
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Stripe setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// API routes
app.use("/api/user", userRoutes);

// Stripe Checkout Route
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { email, planName, price } = req.body;

    if (!email || !planName || typeof price !== "number") {
      return res.status(400).json({ error: "Missing or invalid fields" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: planName,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("❌ Stripe Session Error:", error.message);
    return res.status(500).json({ error: "Payment session creation failed" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Stripe backend running 🚀");
});

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
