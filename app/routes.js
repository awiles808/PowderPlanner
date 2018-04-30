//Keeping All Routes Away From 'server.js' File
//Create A new Express Router,
//Requireing express and creating a router called express.router
//Bring In The MainController
//Bring In The LocationsController

const express = require('express')
  router = express.Router();
  mainController = require('./controllers/main.controller'),
  locationsController = require('./controllers/locations.controller');

//Export Router To Require In 'server.js'File
  module.exports = router;

//Define Routes
//Main Routes
//The Route Is Attached To The Router(module.exports = router)
  router.get('/', mainController.showHome);

//Locations routes - One For ALl
  router.get('/locations', locationsController.showLocations);
  //Show Single
  router.get('/locations/:slug', locationsController.showSingle);


// //Seed Events
// router.get('/locations/seed', locationsController.seedLocations);

//Create Events
//Update Events
//Delete Events
