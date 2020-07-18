const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: String,
        photo: { src: String, alt: String},
        ideas: [{
            ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
        }],
        saved: [{
            ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
        }]
    },
);

const User = mongoose.model("User", userSchema);
module.exports = User;