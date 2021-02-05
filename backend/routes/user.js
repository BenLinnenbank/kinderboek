const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get one
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        if (!user) return res.status(404).json({ message: 'user not found' });
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});

// Get many
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().exec();
        if (!users) return res.status(404).json({ message: 'DB is empty' });
        res.status(200).json(users);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});

// New user
router.post('/newuser', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.find({ email: email }).exec();
        if (!Array.isArray(user)) throw new Error('Did not receive an array')
        if (user.length > 0) return res.status(409).json({ message: 'User already exists' });
        user = await User.create({ email, password });
        console.log(user);
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('email: ',email, 'password: ', password)
    try {
        const user = await User.findOne({ email: email }).exec();
        console.log(user);
        if (!user) return res.status(404).json({ message: 'Profile not found' });
        if (user.password === password && user.email === email) {
            return res.status(200).json({email: user.email});
        }
        res.status(401).json({message: 'No match for this user and password'});
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});

// Update user
router.put('/:id', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findById(req.params.id).exec();
        if (!user) return res.status(404).json({ message: 'user not found' });
        user = await User.findByIdAndUpdate({ _id: req.params.id }, { $set: { email, password } }, { new: true, upsert: true });
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});

// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).exec();
        if (!user) return res.status(404).json({ message: 'user not found' });
        res.json({ message: 'user got removed' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;