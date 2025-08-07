// routes/user.routes.js
import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import * as userController from '../controllers/user.controller.js';
import * as authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

// 🔐 Registration validation
const validateRegisterFields = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phoneNumber').notEmpty().withMessage('Phone number is required'),
];

// 🔐 Login validation
const validateLoginFields = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters'),
];

// ✨ Shared validation handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// ✅ Routes
router.post('/register', validateRegisterFields, handleValidationErrors, userController.createUserController);
router.post('/login', validateLoginFields, handleValidationErrors, userController.loginController);
router.get('/profile', authMiddleware.authUser, userController.profileController);
router.get('/logout', authMiddleware.authUser, userController.logoutController);
router.get('/all', authMiddleware.authUser, userController.getAllUsersController);

export default router;
