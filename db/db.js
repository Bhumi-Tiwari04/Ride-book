const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,  
    })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.error('Error connecting to DB:', err));
}

module.exports = connectToDb;
