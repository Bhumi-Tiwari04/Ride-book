const dotenv = require('dotenv');


// Load environment variables
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');
const connectToDb=require('./db/db');
connectToDb();
// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users',userRoutes);

app.use('/captains',captainRoutes);
module.exports = app;
