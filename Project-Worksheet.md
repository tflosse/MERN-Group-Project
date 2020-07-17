# Project Worksheet

## Project Description

This App aims to provide innovators, developers, and creators alike a communication platform, where they can post, read, and comment on various ideas, and build new relationships over common interests and potential future ventures.

![giphy](https://media3.giphy.com/media/HUplkVCPY7jTW/giphy.gif)


## Project Links

- [Github Repo](https://github.com/tflosse/MERN-Group-Project)

- [Heroku]()

- [Website]()


## User Stories

> Simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system.

*As a(n) ______ , I can...*
- **User:** Log in and securely use the platform.
- **User:** Share and get feedback on products, apps, ventures ideas I have.
- **User:** Receive and send private messages from and to other users.
- **User:** Track comments and upvotes on my ideas.
- **Reader:** Comment on and upvote ideas I feel strongly about.
- **Collaborator:** Reach out to the author and offer my help.
- **Investor:** Gauge user interest and viability of projects.

***Down the road...***
- **User:** Submit new versions with adjustments and new features.
- **Premium user:** Get add. features, like intellectual prop. rights with file sharing.
- **Power user:** Pin comments to the top of the thread.
- **Web Designer:** Submit mockups and models.
- **Developer:** Source new projects and request a link to an existing Github Repo.
- **Developer:** Showcase and submit prototype Apps for bidding.
- **Startup Incubator:** Source new business and development opportunities.
- **Investor:** Find new investment opportunities.
- **Recruiter:** Find new talent.


## Wireframes

![Mobile](https://i.imgur.com/9aDbj8C.png)
![Tablet](https://i.imgur.com/d5vYBqd.png)
![Desktop](https://i.imgur.com/qaBDMd5.png)

<!-- ![Routes Map]()

![React architecture]() -->

### Theme & Fonts
##### Brights:
![Brights](https://i.imgur.com/L96Qc8K.png)

##### Darks:
![Darks](https://i.imgur.com/AZLSK6z.png)

##### Blues:
![Blues](https://i.imgur.com/fF8yKPZ.png)

#### Fonts
***Pairing 1:***

![Titles & Body](https://i.imgur.com/jK6hGYE.png)
![Comments](https://i.imgur.com/hzdn3jU.png)

```js
font-family: 'Bebas Neue', cursive;
font-family: 'Lato', sans-serif;
font-family: 'Source Sans Pro', sans-serif;

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato&family=Source+Sans+Pro:ital,wght@1,300;1,400&display=swap" rel="stylesheet">
```

***Pairing 2:***

![Titles & Body](https://i.imgur.com/stG1vew.png)
![Comments](https://i.imgur.com/6ByNXfk.png)

```js
font-family: 'Lato', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Source Code Pro', monospace;

<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Roboto&family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet">
```

## `MVP/PostMVP`

Refer to: [Team-Planning](https://github.com/tflosse/MERN-Group-Project/blob/master/Team-Planning.md)

#### MVP OBJECTIVES

- Renders all posts
    - Includes: Recent vs. Popular toggle
- Up and down-votes render a counter with corresponding styling
- Create New Post
- Renders one post with all comments
- Add/Delete Comment
- Users can:
    - Log in
    - Create an Account

#### Post-MVP OBJECTIVES

- Ind. post have a messaging icon that links to message form
- Inbox tab with all messages
    - Includes: All vs. Unread Toggle
- Threads between two users
- User Profile Info
    - Edit options

##### *And then some...*
```
- Detailed forms: added fields and ability to include video and images
- User Information stored
- Store cookies (have user remain logged in )
- Demographic information on who likes what ideas
- Push notifications
- Live commenting
```

## Timeframes

Unless otherwise noted, time is listed in hours:

**BEFORE**
| Component | Priority | Team Member | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React Repo and install all dependencies | H | Tam | 1 | 30min. |
| Create wireframes and themes | L | Tam | 2 | 1.5 |
| Update Worksheets for Project Approval | H | Tam | 1 | 1 |
| Create Schemas and Models | H | Tam | 1 | 1 |
| Write Basic Ratoures and corresponding URLs | H | Tam | 1 | 1 |
| Draft React Architecture | H | Tam | 30min. | 30min. |
| List MVP and Post-MVP features based on team discussion | H | Tam | 1 | 45min. |

**DURING**
| Component | Priority | Team Member | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|  | H |  |  |  |
|  | H |  |  |  |
|  | H |  |  |  |
|  | H |  |  |  |
|  | H |  |  |  |
|  | H |  |  |  |
|  | H |  |  |  |
|  | H |  |  |  |
|  | M |  |  |  |
|  | L |  |  |  |
|  | L |  |  |  |
| Total | H |  |  |  |

## Project Structure

#### Back-end:

```js
Models:
- user
- idea
- comment
- message
```
Refer to [References](https://github.com/tflosse/MERN-Group-Project/blob/master/References.md) for detailed `Schemas`.

#### Routes and Descriptions

##### MVP:
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

##### Post-MVP:
| Type | URL | Model & Description | 
| --- | :---: | :---: |
| POST - Create | **/message** | Send a message to a user referencing an idea |
| GET - FindMany | **/thread/:senderId** | Gets all messages between two users |
| GET - Find | **/inbox** | Get all messages |
| DELETE - FindByIdAndDelete | **/** | Delete a message in a thread |

External APIs *(if necessary)*:
- This API [here]()
- That API [here]()

#### Front-end Routes:

- `Login page`
- `UserForm`

- `Homepage`: Search by Keyword
- `Dashboard`: All ideas posts (Recent & Upvoted)
- `Post`: Single post with details and comments
- `Settings`: User page & account information

- `PostForm`
- `CommentForm`

***Later:***
- `Inbox`: All private messages
- `Thread`: All messages between two specific users
- `MessageForm`
- `Dashboard`: Sort by - *this week, month, year*
- `Account Info`

Functionality Details to be listed below...

##### Components and Descriptions:

| Component | Functionalities | 
| --- | :---: |  
| Login Form | Create account (post) or log in (get) |
| App | N/A | 
| Layout | N/A | 
| Nav | Clickable links |
| Footer | N/A |
| Home | Recont vs. Popular toggle |
| Posts | Up/Down-vote counter |
| Post Form |  | 
| Post |  |
| Comments |  |
| Comment Form | |
| Comment |  |
| Inbox |  |
| Message Form |  |
| Thread |  |
| User Profile |  |
| Settings |  |


## Additional Libraries

- Styled-Components
- Material.io
- Bootstrap
- Animé

## Code Snippet

Route that used all three (user, post, and comment) models:

```js

```

Used states to show/hide details sections:

```js

```

Used ternary to avoid rendering undefined elements:

```js

```

