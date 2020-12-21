const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Array,
    required: true,
  },
  published: {
    type: Date,
  },
  ageRange: {
    type: Number,
    required: true,
  },
  images: [{
    svg: {
      type: String,
      required: true,
    },
  }],
  chapters: [{
     number: {
       type: Number,
       required: true,
     },
     completed: {
       type:  Boolean,
       required: true,
       default: false,
     },
   }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = ('Book', bookSchema);

module.exports = Book;