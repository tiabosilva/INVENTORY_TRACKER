const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require(path.resolve(__dirname, '../models/User'));
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
    const { name, email, password, userType } = req.body; // Include userType
    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user with userType
        const user = new User({ name, email, password, userType });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        // Check password match
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT token including userType in the payload
        const token = jwt.sign(
            { id: user._id, userType: user.userType }, // Include userType in the token payload
            process.env.JWT_SECRET, // Use your JWT secret key
            { expiresIn: '1h' } // Token expiration
        );

        // Return token and user details in response
        res.json({ 
            token,
            user: { id: user._id, name: user.name, email: user.email, userType: user.userType } 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
