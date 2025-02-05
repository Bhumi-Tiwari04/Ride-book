const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,  // Fixed 'require' to 'required'
            minlength: [3, 'First Name Must Be At Least 3 Characters Long']
        },
        lastname: {
            type: String,
            required: true,  // This was missing
            minlength: [3, 'Last Name Must Be At Least 3 Characters Long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email Must Be At Least 5 Characters Long']
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
