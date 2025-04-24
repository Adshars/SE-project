import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password, organisation } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    try {
        const user = new User({
            email,
            password: hashed,
            organisation,
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

export default router;