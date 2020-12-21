const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  role: {
    type: String,
    enum: ['admin', 'general user'],
    default: 'general user',
  },
  userFirstName: {
    type: String,
    required: true,
  },
  userLastName: {
    type: String,
  },
  userAge: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const UserProfile = ('UserProfile', userProfileSchema);

module.exports = UserProfile;