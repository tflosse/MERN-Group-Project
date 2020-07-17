# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project Worksheet


## Project Description

This App aims to provide innovators, developers, and creators alike a communication platform, where they can post, read, and comment on various ideas, and build new relationships over common interests and potential future ventures.

![giphy](https://media3.giphy.com/media/HUplkVCPY7jTW/giphy.gif)

#### Team
- Andrew Culhane
- Jim Chen
- Nick diPreta
- Tamara Flosse
> Squad lead: Kenny​ 


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


## Project Links

- [Github Repo](https://github.com/tflosse/MERN-Group-Project)

- [Heroku]()

- [Website]()


## Wireframes

![Wireframes]()

![Routes Map]()

![React architecture]()

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

#### MVP OBJECTIVES

- Feature
- Feature
- Feature

#### PostMVP OBJECTIVES

- Feature
- Feature
- Feature

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
| Draft React Architecture | H | Tam | IC | IC |
| List MVP and Post-MVP features based on team discussion | H | Tam | IC | IC |

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

```js
ApiURLs:
```
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

`Login page`

`Homepage`: Search by Keyword
`Dashboard`: All ideas posts (Recent & Upvoted)
`Post`: Single post with details and comments
`Settings`: User page & account information

***Later:***
`Inbox`: All private messages
`Thread`: All messages between two specific users
`Dashboard`: Sort by - *this week, month, year*

##### Components and Descriptions:

| Component | Description | 
| --- | :---: |  
| Login Form |  |
| App |  | 
| Layout |  | 
| Nav | Clickable links |
| Footer |  |
| Home |  |
| Posts |  |
| Post |  |
| Comments |  |
| Comment |  |
| Inbox |  |
| Thread |  |
| User Profile |  |
| Settings |  |


## Additional Libraries

- Styled-Components
- Material.io
- Bootstrap
-
-

## Code Snippet

**All Snippets below are examples from a previous project**
Used states to bypass an issue with data type, and useEffect to make the API call when details page loads:

```js
function MemberDetails(props) {

const [memberDetails, updateMemberDetails]= useState({})
const [memberRole, setMemberRole]= useState({})
useEffect(() => {
    const memberApiCall = async () => {
      const res = await fetch(`https://api.propublica.org/congress/v1/members/${props.match.params.id}.json`,
      {
        dataType: "json",
        headers: { "X-API-Key": "ZuPHJPB5SdYllQS7KY4cAVoLY6mdboxoc3nZLOcE" }
      })
      const json = await res.json()
      let resultsObject = json.results[0]
      let role = json.results[0].roles[0]
      updateMemberDetails(resultsObject)
      setMemberRole(role)
    }
    memberApiCall()
  }, []); 
  return (
      <div className="member-info">
        <h3 id="member-name">{memberRole.short_title} {memberDetails.first_name} {memberDetails.last_name}</h3>
        <p>{currentParty(memberDetails.current_party)}<br />
        In role since: {memberRole.start_date}<br />
        Next election: {memberRole.next_election}</p>
      </div>
    )
};
```

Used states to show/hide details sections:

```js
    const [billsButton, setBillsButton]= useState('display')
    const [billsDiv, setBillsDiv]= useState('hidden')
    const handleShow = () => {
        console.log('Expanding Bills Section');
        billsApiCall()
        setBillsButton('hidden')
        setBillsDiv('shown')
    }; 
    const handleHide = () => {
        console.log('Hiding Bills Section')
        setBillsButton('display')
        setBillsDiv('hidden')
    };
    return (
      <div className="member-bills">
          <button className={`${billsButton}`} onClick={handleShow}>Show Sponsored Bills</button>
          <button className={`${billsDiv}`} onClick={handleHide}>Hide Sponsored Bills</button>
      </div>
    )
```

Used ternary to avoid rendering undefined elements:

```js
{stateResults?
              <SearchResults {...routerProps} 
                 stateResults={stateResults}
                 stateSearch={stateSearch}/>:<h4>{"Please enter a valid two-letter state abbriviation."}</h4>}

(...)

<p className="bill-summary">{bill.summary? `${bill.summary}`:"Bill Summary Unavailable"}</p>
```

