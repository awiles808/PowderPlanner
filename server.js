//Setting Up Application
//Grab Our Dependencies
//Start A New Instance of Express & call it app.
const express = require('express'),
  app = express();
  port = process.env.PORT || 8080;

  //Configure Application

  //Set The Routes
  //requireing routes.js file app.use(require('./app/routes'))In the app folder in routes.js file.
  app.use(require('./app/routes'))


  //Start Server Which Is Listening On PORT
  //Creating A Function To Console.Log Where The App Is Listening
  app.listen(port, () => {
    console.log(`App Listening on http://localhost:${port}`);
  });
