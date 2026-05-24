import express from 'express';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

// Init Express
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Database
// connectDB(); // Uncomment when MONGO_URI is set

// Core Middlewares
app.use(express.json());

// API Endpoints
app.use('/api/users', userRoutes);

// Basic health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// Start listening
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Server] Core Express API server running on port ${PORT}`);
});
export default app;
