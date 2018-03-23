# Doctor Finder
Completed for Epicodus - Javascript Week2 Code Review

## March 23, 2018

#### By Jared Clemmensen

## Description
  A javascript app that utilizes the BetterDoctor API to allow users to search for doctors near them.

##### User stories
1. A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
2. A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
3. If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
4. If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
5. If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


## Setup/Installation Requirements
### To run locally
  1. download or clone repository
  2. with npm installed on your computer, run '$ npm run install' from the project root directory to install all dependencies
  3. get API key for BetterDoctor and store in a .env file as 'exports.apiKey'
  4. to host locally run '$npm run start'
  5. if you run into CORS problems while hosting locally, install the chrome 'allow control allow origin' extension

## Technologies Used
  ES6 Javascript app built using Webpack. Utilizes BetterDoctor and Google Geocode APIs. 

## License
  Copyright (c) 2018 Jared Clemmensen
