const mongoose = require("../config/db");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: { type: String, required: true },
})

const User = mongoose.model('User', userSchema);

module.exports = User;