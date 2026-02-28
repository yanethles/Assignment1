# CSCI 3916 – Assignment 1

## Echo Server
This project implements a simple Echo server using Node.js and Express.
The server responds with the same string it receives in a POST request.

## Deployment
The server is deployed on Render at:
https://assignment1-4q27.onrender.com

## Postman Testing
A Postman collection was created to test the deployed server.

### Tests Included
- Status code is 200
- Response time is less than 200ms
- Response body matches the request body

### Environment Variables
The following Postman environment variable was used:
- `echo_body`: the text sent in the POST request body
