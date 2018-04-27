# PowderPlanner
npm init
npm install --save Express
npm install
create .gitignore file with - node_modules/ written inside.
create server.js file

      In server.js -
Set Up Application.
Grab  Dependencies.
Start A New Instance of Express & call it app.

      Files And Folders
Need To Create New Folders And Files.
Create routes.js.
Created A App Folder
Created A routes.js File In The App Folder.  
In App Folder I Created A Controllers.
Folder, With A main.events.js For All The Main Things In Our Application.
I Created A Models Folder.
The .controller.js File Extension Helps You Know Exactly What File Is Open.
Created A Public Folder For The Client Side (CSS HTML EJS)
Inside Of There Created A CSS Folder
Created A Views folder.

      Routes
We do not want our routes to be defined in the server.js file.
app.use(require('./app/routes')); Pulls in all the routes to the server.js file
Set The Routes In Routes.js
Keeping All Routes Away From 'server.js' File
Create A new Express Router,
Requireing express and creating a router called express.router
const express = require('express')
  router = express.Router();












  Configure Application

  Start Server Which Is Listening On PORT
  Creating A Function To Console.Log Where The App Is Listening
