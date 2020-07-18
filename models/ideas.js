const mongoose = require('../db/connection')

const ideaSchema = new mongoose.Schema(
    {
        authorInfo: {
            isAnonymous: Boolean,
            username: {
                ref: "Username",
                type: mongoose.Schema.Types.ObjectId
            },
            canContact: { type: Boolean, default: true }
        }
    },
    {   
        ideaBody: {
            title: { type: String, required: true },
            description: { type: String, required: true },
            pictures: [{
                src: String,
                alt: String
            }],
            keywords: [],
            // should be an array of strings
            votes: { type: Number, default: 0 }
            // counter
        }
    },
    {
        comments: [{
            ref: "Comment",
            type: mongoose.Schema.Types.ObjectId
    }]},
    {timestamps: true}
);

const Idea = mongoose.Model("Idea", ideaSchema);
module.exports = Idea;

