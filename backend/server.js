const express = require('express');
const connectDB = require('./config/db');
const users = require('./routes/user');
const profiles = require('./routes/userProfile');
const preferences = require('./routes/userPreferences');
const books = require('./routes/book');

const app = express();
connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use('/user', users);
app.use('/profile', profiles);
app.use('/preferences', preferences);
app.use('/books', books);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));