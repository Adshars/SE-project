const express = require('express'); // Load Express
const bcrypt = require('bcryptjs'); // For hashing passwords
const User = require('../models/user'); // Import User model
const router = express.Router(); // Create a router

// POST /api/register
router.post('/', async (req, res) => {
  const { email, password, organization } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      organization
    });

    await newUser.save(); // Save user to database

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; // Export router
// This router handles user registration by accepting email, password, and organization details.
// It checks if the email already exists, hashes the password, and saves the user to the database.