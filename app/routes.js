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


// //Seed Events
router.get('/locations/seed', locationsController.seedLocations);

//Create Events
router.get('/locations/create', locationsController.showCreate);
router.post('/locations/create', locationsController.processCreate);

//Update Events
router.get('/locations/:slug/edit', locationsController.showEdit);
router.post('/locations/:slug', locationsController.processEdit);

//Delete Events
router.get('/locations/:slug/delete', locationsController.deleteLocation);

//Show Single using slug
router.get('/locations/:slug', locationsController.showLocation);
