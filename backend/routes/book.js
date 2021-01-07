const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


// get one
router.get('/book/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).exec();
        if (!book) return res.status(404).json({ message: 'book not found' });
        res.json(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});

// get many
router.get('/books', async (req, res) => {
    try {
        const books = await Books.find().exec();
        if (!books) return res.status(404).json({ message: 'DB is empty' });
        res.json(books);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal server error');
    }
});

// new book
router.post('/newbook', async (req, res) => {
    try {
        // not needed yet
    } catch (err) {
        // not needed yet
    }
});

// update book
router.put('/:id', async (req, res) => {
    try {
        // not needed yet
    } catch (err) {
        // not needed yet
    }
});

// delete book
router.delete('/:id', async (req, res) => {
    try {
        // not needed yet
    } catch (err) {
        // not needed yet
    }
});

module.exports = router;