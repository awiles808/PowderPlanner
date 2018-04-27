//Setting Up Application
//Grab Our Dependencies
//Start A New Instance of Express & call it app.
const express = require('express'),
  app = express();
  port = process.env.PORT || 8080;

  //Configure Application

  //Set The Routes
  //Creating A Homepage Route
  app.get('/', (req, res) => {
    res.send('Yo this is the route,and the response "res", sends this message.')
  });


  //Start Server Which Is Listening On PORT
  //Creating A Function To Console.Log Where The App Is Listening
  app.listen(port, () => {
    console.log(`App Listening on http://localhost:${port}`);
  });
