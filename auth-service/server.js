import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import register from './routes/register.js';
import login from './routes/login.js';
import resetPassword from './routes/reset-password.js';
import { verifyToken } from './middleware/authMiddleware.js';

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/reset-password', resetPassword);

export default app;

app.listen(process.env.PORT, () => {
    console.log(`Auth service running on port ${process.env.PORT}`);
});