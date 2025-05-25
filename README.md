#  School Management API

A Node.js REST API built with Express.js and MySQL to manage school data. It supports adding new schools and retrieving a list of schools sorted by proximity to a given location.

---------------------

# Live API

Deployed on [Railway] https://nodejs-assignment-production-72af.up.railway.app

---------------------
# Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **Dotenv** for environment configuration

---------------------

# API Endpoints

✅ Add School

- **Endpoint**: `/addSchool`
- **Method**: `POST`
- **Content-Type**: `application/json`

 Request Body:

```json
{
{
  "name": "Central High",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.0060
}
}
Success Response:
{
    "message": "School added successfully"
}
 List Schools by Proximity
Endpoint: /listSchools

Method: GET
Query Parameters:
latitude: User's latitude
longitude: User's longitude

Example:
http://localhost:3000/listSchools?latitude=40.730610&longitude=-73.935242

----------------------

# Local Setup
git clone https://github.com/Sandhya251/Node.js-Assignment.git
cd Node.js-Assignment

# Install dependencies
npm install

# Create a .env file

#  Start the server
node server.js

------------------------

# Postman Collection:
https://drive.google.com/file/d/1HzKDXHIVeQNCEVqgO89tGMq2UZRKq8Jo/view?usp=sharing
