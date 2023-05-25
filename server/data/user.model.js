const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    phone: { type: Number, required: true, unique: true},
    fullName: String,
    user : String,
    password : String,
});

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;