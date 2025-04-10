const express = require('express'); // Load Express framework
const mongoose = require('mongoose'); // For connecting to MongoDB
const dotenv = require('dotenv'); // To read values from .env
const registerRoute = require('./routes/register'); // Import registration route
const loginRoute = require('./routes/login'); // Import login route
const resetPasswordRoute = require('./routes/reset-password'); // Import reset password route

dotenv.config(); // Load .env file variables
const app = express(); // Create Express app
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.log('❌ MongoDB error:', err));

// Set up API routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/reset-password', resetPasswordRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Auth Service running on port ${PORT}`));