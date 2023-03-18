# User Authentication with MERN

This projects presents an authentication application to look at how to create login and registration with JWT token using Node Express React and MongoDB.

## Important Command Lines 

For server side:

`npm i express mongoose dotenv nodemon cors`

`npm i jsonwebtoken joi joi-password-complexity`

`npm i bcrypt`

For client side

`npx create-react-app client`

`cd client`

`npm i axios react-router-dom`

## Working with the Project 

Two configaration files into this project. First in the client side and second in the server side. In the server side folder create .env file and put this code inside it.

`DB = mongodb+srv://<user>:<pass>@cluster0.l17quyr.mongodb.net/database`

`JWTPRIVATEKEY = <Private Key Value>`

`SALT = 10`

Now, create all these variables in the project and make sure DB variable is set. Otherwise, the project will not work.

