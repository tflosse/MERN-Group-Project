# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project Worksheet

App Description

#### Team
- Andrew Culhane
- Jim Chen
- Nick diPreta
- Tamara Flosse
> Squad lead: Kenny

​ 
![Add Image Here]()

## Project Links


- [Github Repo](https://github.com/tflosse/MERN-Group-Project)

- [Heroku]()

- [Website]()

​

## Project Description



## Concept


## Wireframes

![Wireframes]()

![Routes Map]()

![React architecture]()


## `MVP/PostMVP`

#### MVP OBJECTIVES

- Feature
- Feature
- Feature

![Dummie Example]()


#### PostMVP OBJECTIVES

- Feature
- Feature
- Feature

## Timeframes

Unless otherwise noted, time is listed in hours:

| Component | Priority | Team Member | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and install all dependencies | H |  |  | 30min |
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
```

```js
ApiURLs:
```

```js
Routes:
```

##### Routes and Descriptions

| CRUD | RESTful | Model & Description | 
| --- | :---: | :---: |
| Read | get |  |
| Read | get |  |
| Create | post |  |
| Create | post |  |
| Update | put |  |
| Update | put |  |
| Delete | delete |  |

External APIs:
- This API [here]()
- That API [here]()

#### Front-end Components:

```js
Nav:
```

```js
Pages and Routes:
```

##### Components and Descriptions

| Component | Description | 
| --- | :---: |  
| App |  | 
| Header | Renders the Header and Nav | 
| Nav | Clickable links |
| Form |  |
| Footer |  |
|  |  |
|  |  |
|  |  |
|  |  |


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

