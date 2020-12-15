const mockData = require('./database/dataObject.js');
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(mockData)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})