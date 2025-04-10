const express = require('express'); // Load Express
const bcrypt = require('bcryptjs'); // For checking password
const jwt = require('jsonwebtoken'); // For generating JWT tokens
const User = require('../models/user'); // Import User model
const router = express.Router(); // Create a router

// POST /api/login
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    // Compare entered password with saved hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, organization: user.organization }, // Payload
      process.env.JWT_SECRET, // Secret key from .env
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    res.json({ token }); // Send token back to user
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
// Export router
// This router handles user login by accepting email and password.
