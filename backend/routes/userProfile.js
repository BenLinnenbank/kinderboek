const express = require('express');
const router = express.Router();
const Profile = require('../models/UserProfile');


// get one
router.get('/userprofile/:id', async (req, res) => {
    try {
        const userProfile = await Profile.findById(req.params.id).exec();
        if (!userProfile) return res.status(404).json({ message: 'Profile not found' });
        res.json(userProfile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});
// get many
router.get('/profiles', async (req, res) => {
    try {
        // not sure if we need this functionality
        const userProfiles = await Profile.find().exec();
        if (!userProfiles) return res.status(404).json({ message: 'DB is empty' });
        res.json(userProfiles);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});
// new user
router.post('/newuserprofile', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.find({ email: email }).exec();
        if (user) return res.status(409).json({ message: 'user already exists' });
        user = await User.create({ email, password })
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});
// update user
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
// delete user
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