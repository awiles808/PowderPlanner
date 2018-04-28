//Keeping All Routes Away From 'server.js' File
//Create A new Express Router,
//Requireing express and creating a router called express.router

const express = require('express')
  router = express.Router();
  mainController = require('./controllers/main.controller')

//Export Router To Require In 'server.js'File
module.exports = router;

//Define Routes
//The Route Is Attached To The Router(module.exports = router)
router.get('/', mainController.showHome);
