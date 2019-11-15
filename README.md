# Job Search Genie
This project was created to access my progress on the FACxBeamery training scheme thus far. 

A user can search jobs listed on github in their area, and also use advanced search parameters, keywords and contract type.   

An autocomplete provides suggestions of large US Cities

![landing page](https://i.imgur.com/eVRmtkv.png)

![jobs list](https://i.imgur.com/KGyGyd6.png)
This app uses the https://jobs.github.com/api API, to locate jobs in an area that a user searches. 
The frontend is written in React, and the backend uses Express. 


## Tech Stack:
### Frontend:
* React app (create-react-app used)
* Jest used for testing

### Backend: 
* Express server
* Jest, supertest, nock used for testing

## To run locally: 
1. ```git clone https://github.com/FACxBeamery/tech-test-martha.git```

2. ```cd client``` ```npm i``` ```npm start```

3. ```cd server``` ```npm i``` ```npm start```


## To test:
Run ```npm test``` in ```/client``` and ```/server``` to run tests

## Known bugs/improvements:
* Dropdown doesn't close on click outside
* No tests for key down on suggestions list, can't get it working
* Test warning on client- unique key bug isn't fixed
