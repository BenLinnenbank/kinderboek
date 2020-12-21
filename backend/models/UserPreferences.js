const mongoose = require('mongoose');

const userPreferencesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  list: [{
    haveRead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
    current: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
    toRead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    }   
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserPreferences = ('UserPreferences', userPreferencesSchema);

module.exports = UserPreferences;