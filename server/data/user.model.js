const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    phone: { type: Number, required: true, unique: true},
    fullName: String,
    email : { type: String, required: true, unique: true},
    password : String,
});

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;