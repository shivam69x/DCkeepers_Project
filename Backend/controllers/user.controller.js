
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

// Helper: Create JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET || 'your_jwt_secret',
    { expiresIn: '1d' }
  );
};

// ✅ Register a new user
export const createUserController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password, firstName, lastName, phoneNumber } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    const user = new User(req.body);
    await user.save();

    const token = generateToken(user);

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: user._id, email: user.email, firstName, lastName },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

// ✅ Login a user
export const loginController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user);

    res.json({
      message: 'Login successful',
      user: { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

// ✅ Get user profile (requires auth middleware)
export const profileController = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load profile', error: error.message });
  }
};

// ✅ Logout (Client should handle token removal)
export const logoutController = (req, res) => {
  // Optional: blacklist token or clear cookies
  res.json({ message: 'Logout successful' });
};

// ✅ Get all users (admin access assumed)
export const getAllUsersController = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
};
