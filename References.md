# Reference Sheet

### Models & Schemas

```js
userSchema = {
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: String,
        photo: { src: String, alt: String}
        ideas: [{
            ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
    }]},
    {
        saved: [{
            ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
    }]},
}    
```

For both `ideas` and `comments`, include an option for users to post ideas and comment **anonymously** by adding an `anonymous` option (collapse the username input field on the front-end using `useState` and `onClick`):

```js
ideaSchema = {
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        pictures: [{
            src: String,
            alt: String
        }],
        keywords: [Strings],
        votes: { type: Number, default: 0 }
        // counter
    },
    {
        isAnonymous: Boolean,
        username: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        }
        canContact: { type: Boolean, default: true }
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
        commentBody: { type: String, required: true }
    },
    {
        username: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        },
        isAnonymous: Boolean,
    },
    {timestamps: true}
}
```

```js
messageSchema = {
    {
        sender: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
        }
    },
        sendTo: {
            ref: "Username",
            type: mongoose.Schema.Types.ObjectId
    },
    {
        message: { type: String, required: true }
    },
    {timestamps: true}
}
```

### Controller Routes

| Type | URL | Model & Description | 
| --- | :---: | :---: |
| POST - Create | **/newuser** | Create an account |
| GET - Find | **/login/:userId** | Find and validate user credentials  |
| GET - FindMany | **/dash/:userId** | Render most recents/popular *(front-end toggle)* |
| POST - Create | **/post** | Create a new post |
| PUT - FindByIdAndUpdate | **/edit/:id** | Edit post *(should include user validation)* |
| GET - FindById | **/comments/:id** | ***Find idea post*** and render all comments |
| DELETE - FindByIdAndDelete | **/** | Delete post *(should include user validation)* |
| PUT - FindByIdAndUpdate | **/:id** | **Up or down-vote** post |
| POST - Create | **/** | Add a new comment |
| DELETE - FindByIdAndDelete| **/** | ***Find comment*** and delete |
| PUT - FindByIdAndUpdate | **/account/:userId** | Change user credentials *(should include user validation)* |
| OTHER | **/** | *Table-template* |

##### Post-MVP:
| Type | URL | Model & Description | 
| --- | :---: | :---: |
| POST - Create | **/message** | Send a message to a user referencing an idea |
| GET - FindMany | **/thread/:senderId** | Gets all messages between two users |
| GET - Find | **/inbox** | Get all messages |
| DELETE - FindByIdAndDelete | **/** | Delete a message in a thread |

