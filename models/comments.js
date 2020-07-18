const mongoose = require('../db/connection')

const commentSchema = new mongoose.Schema(
    {
        username: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        },
        isAnonymous: Boolean,
    },
    {
        commentBody: { type: String, required: true }
    },
    {timestamps: true}
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;

