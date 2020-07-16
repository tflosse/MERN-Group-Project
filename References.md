# Reference Sheet

### Models & Schemas

```js
userSchema = {
    {
        username: { type: String, required: true},
        email: String,
        posts: [{
            ref: "Post",
            type: mongoose.Schema.Types.ObjectId
    }]},
    {
        saved: [{
            ref: "Post",
            type: mongoose.Schema.Types.ObjectId
    }]},
}    
```

For both `posts` and `comments`, include an option for users to post and comment **anonymously** by adding an `anonymous` option (collapse the username input field on the front-end using `useState` and `onClick`):

```js
postSchema = {
    {
        username: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        },
        isAnonymous: Boolean,
        title: { type: String, required: true},
        description: { type: String, required: true},
        keywords: [],
    },
    {
        votes: { type: Number, default: 0},
        // counter
    },
    {
        comments: [{
            ref: "Comment",
            type: mongoose.Schema.Types.ObjectId
    }]},
    {timestamps: true}
}
```

```js
commentSchema = {
    {
        username: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        },
        isAnonymous: Boolean,
        commentBody: { type: String, required: true},
    },
    {timestamps: true}
}
```

### URLs

### Routes

