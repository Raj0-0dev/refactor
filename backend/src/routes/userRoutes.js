import express from 'express';
import { signupUser, loginUser, getUserProfile } from '../controllers/userController.js';

const router = express.Router();

// Public routes
router.post('/signup', signupUser);
router.post('/login', loginUser);

// Secure route example
router.get('/profile', getUserProfile);

export default router;
