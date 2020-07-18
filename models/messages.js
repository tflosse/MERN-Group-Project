const mongoose = require('../db/connection')

const messageSchema = new mongoose.Schema(
    {
        sender: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        }
    },
    {
        sendTo: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        }
    },
    {
        messageBody: { type: String, required: true }
    },
    {timestamps: true}
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
