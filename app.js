const dotenv = require('dotenv');


// Load environment variables
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB=require('./db/db');
connectToDB();
// Enable CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;
