# My Project

## Introduction

This project is designed to Create users and the users can also tweet.

## Installation

To install the project, run the following command: npm install

## Usage

To use the project,

## Project Structure

The project is structured as follows:

- `controllers/`: All the functionalities is implemented in controllers
- `database/`: The database structure is implemented here
- `routes/`: The api endpoints for the functionalities.
- `middlewares/`: The authentication part is implemented inside middlewares
- `app.js/`: app.js is the root file.

## Dependencies

The project depends on the following packages:

- `bcrypt`: Library for hashing passwords securely.
- `dotenv`: Library for loading environment variables from a .env file.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JSON Web Tokens (JWT).
- `mongodb`: Official MongoDB driver for Node.js.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.

## Configuration

.env file has all the configurations and the example you can found it in .env.example

## API Reference

### Endpoint: /user

#### POST /user/register

A new user can be creataed by sending a POST request to this endpoint with the following body:

```json
{
  "userName": "",
  "password": ""
}
```

#### POST /user/login

A registered user can login by passing the details in the body:

```json
{
  "userName": "",
  "password": ""
}
```

#### GET /user/:id/timeline

All the registered tweets of the person will be found here in this api:

```
In :id you have to pass the id of the registed user

```

#### POST /tweet/create

The registed user can write tweets by sending a POST request to this endpoint with the following body:

```json
{
  "text": ""
}
```

## AUTHENTICATION

You need to provide x-api-key for the apis to run
