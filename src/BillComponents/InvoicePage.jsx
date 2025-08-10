

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Download, Key } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import DCKLogoPng from "../assets/DCK - Footer.png";
import Scanner from "../assets/scannerdck.png";
// import OrderSummary from "./OrderSummary"; // Uncomment if available

const stripePromise = loadStripe(Key);

const InvoiceHeader = ({ invoice, status }) => (
  <div className="relative">
    {/* Status Badge */}
    <div className="absolute -top-[160px] -right-[130px] z-10">
      <div
        className={`transform rotate-45 origin-bottom-left px-14 py-1 text-white font-bold text-sm tracking-wider ${
          status === "PAID" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {status}
      </div>
    </div>

    <div className="flex justify-between items-start mb-8 border-b pb-4 mt-12">
      {/* Company Logo and Details */}
      <div className="flex items-start space-x-4">
        <img src={DCKLogoPng} alt="Company Logo" className="w-40 h-auto mb-2" />
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Digital Cloud Keepers Pvt. Ltd.
          </h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Vijay Path, Mansarovar, Jaipur, India</p>
            <p>GSTIN: 07ABCDE1234F2Z5</p>
            <p>Email: info@dckeepers.com</p>
          </div>
        </div>
      </div>

      {/* Invoice Info */}
      <div className="text-right">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Invoice</h1>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Invoice Date: {invoice.date}</p>
          <p>Invoice No: {invoice.number}</p>
        </div>
      </div>
    </div>
  </div>
);

const InvoiceDetails = ({ billing, plan }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
    {/* Bill To Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Bill To:</h3>
      <div className="text-sm space-y-1 text-gray-700">
        <p className="font-medium">{billing.fullName}</p>
        <p>{billing.email}</p>
        <p>{billing.phone}</p>
        <p>
          {billing.streetAddress}, {billing.city}, {billing.state},{" "}
          {billing.zipCode}, {billing.country}
        </p>
      </div>
    </div>

    {/* Plan Details Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Plan Details:</h3>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-1">{plan.name}</h4>
        <p className="text-sm text-gray-600 mb-3">{plan.subtitle}</p>

        {/* Features List */}
        {plan.features && plan.features.length > 0 && (
          <div>
            <h5 className="text-sm font-medium text-gray-800 mb-2">Included Features:</h5>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

const InvoiceTable = ({ plan, basePrice, gst, total, formatPrice }) => (
  <div className="mb-6">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2 border">Service</th>
          <th className="p-2 border">Price</th>
          <th className="p-2 border">GST (18%)</th>
          <th className="p-2 border">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">{plan.name}</td>
          <td className="p-2 border">{formatPrice(basePrice)}</td>
          <td className="p-2 border">{formatPrice(gst)}</td>
          <td className="p-2 border font-medium">{formatPrice(total)}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const TransactionsSection = ({ finalTotal, formatPrice }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Transactions</h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left text-sm font-semibold">
              Transaction Date
            </th>
            <th className="border border-gray-300 p-3 text-left text-sm font-semibold">Gateway</th>
            <th className="border border-gray-300 p-3 text-left text-sm font-semibold">Transaction ID</th>
            <th className="border border-gray-300 p-3 text-right text-sm font-semibold">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="border border-gray-300 p-3 text-sm text-center text-gray-500">
              No Related Transactions Found
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td colSpan="3" className="border border-gray-300 p-3 text-sm font-medium text-right">
              Balance
            </td>
            <td className="border border-gray-300 p-3 text-sm text-right font-bold">
              {formatPrice(finalTotal)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Invoice = () => {
  const { state } = useLocation();
  const { plan, billing } = state || {};
  const navigate = useNavigate();

  if (!plan || !billing) {
    return (
      <div className="text-center mt-20 text-xl text-gray-700">
        No invoice data found. Please go back and complete your order.
      </div>
    );
  }

  const basePrice = parseInt(plan.price, 10);
  const gst = Math.round(basePrice * 0.18);
  const total = basePrice + gst;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  const handleDownload = () => {
    window.print();
  };

  const handleStripePayment = async () => {
    try {
      console.log("Initiating Stripe payment...");
      const res = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: billing.email,
          planName: plan.name,
          price: total,
        }),
      });

      const session = await res.json();
      console.log("Stripe session response:", session);

      if (session.id) {
        const stripe = await stripePromise;
        console.log("Redirecting to Stripe Checkout...");
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error("Stripe session creation failed:", session);
      }
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  // Generate invoice details
  const invoice = {
    number: `INV-${Date.now()}`,
    date: new Date().toLocaleDateString(),
    dueDate: new Date().toLocaleDateString(),
    status: "UNPAID",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
          <div className="p-8">
            <InvoiceHeader invoice={invoice} status={invoice.status} />
            <InvoiceDetails billing={billing} plan={plan} />
            <InvoiceTable
              plan={plan}
              basePrice={basePrice}
              gst={gst}
              total={total}
              formatPrice={formatPrice}
            />
            <TransactionsSection finalTotal={total} formatPrice={formatPrice} />

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Online Payment */}
                  <div>
                    <p className="text-sm text-gray-700 mb-4 font-medium">Online via UPI / Card</p>

                    {/* UPI QR Code Section */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 w-full max-w-xs mx-auto">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3 text-center">
                        Pay using UPI:
                      </h4>
                      <div className="flex justify-center mb-3">
                        <img className="w-24 h-24 object-contain" src={Scanner} alt="UPI QR Code" />
                      </div>
                      <p className="text-xs text-gray-600 text-center">
                        Scan QR code with any UPI app to pay {formatPrice(total)}
                      </p>
                    </div>
                  </div>

                  {/* Bank Transfer Details */}
                  <div>
                    <div className="border-t border-gray-200 pt-4 lg:border-t-0 lg:pt-0">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Bank Account Details:</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex justify-between">
                          <span className="font-medium">Bank Name:</span>
                          <span className="font-medium">HDFC Bank</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Account/Payee Name:</span>
                          <span className="font-medium">Site Worx Infotech</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Account No.:</span>
                          <span className="font-medium">50200057304581</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">RTGS/NEFT IFSC Code:</span>
                          <span className="font-medium">HDFC0003922</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="border-t pt-6 mt-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6 print:hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                  {/* Payment Summary */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Secure Payment Gateway</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Total Amount: {formatPrice(total)}</h4>
                    <p className="text-sm text-gray-600">
                      Includes GST • 30-day money-back guarantee • Instant activation
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-8 gap-4 flex-wrap">
                    <button
                      onClick={handleStripePayment}
                      className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                      Pay Now
                    </button>

                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4" />
                      Download Invoice
                    </button>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-blue-100">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    256-bit SSL Secured
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    PCI DSS Compliant
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <svg className="w-3 h-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Bank Grade Security
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Thank you for your business!</p>
                  <p className="text-xs text-gray-500">Need help? Contact us at info@dckeepers.com</p>
                </div>
                <div className="text-xs text-gray-500">Invoice generated on {new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;