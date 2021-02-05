const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const users = require('./routes/user');
const profiles = require('./routes/userProfile');
const preferences = require('./routes/userPreferences');
const books = require('./routes/book');
const app = express();
connectDB();

app.use(bodyParser.json({limit: '10mb'}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/user', users);
app.use('/api/profile', profiles);
app.use('/api/preferences', preferences);
app.use('/api/books', books);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));