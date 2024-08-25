const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        maxLength: 100
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        maxLength: 100
    },
    rollNumber: {
        type: String,
        required: true,
        maxLength: 20
    }
});

module.exports = mongoose.model("User", userSchema);
