//Load Environment Variables
//Got that security
require('dotenv').config()


//Setting Up Application
//Grab Our Dependencies
//Start A New Instance of Express & call it app.
//Grab The Express Layouts Package
const express     = require('express'),
  app             = express();
  port            = process.env.PORT || 8080,
  expressLayouts  = require('express-ejs-layouts'),
  mongoose        = require('mongoose');

  //Configure Application
  //Tell Express To look For Static Assets First
  //Tell Express CSS Files Will Be In The Public Folder
  app.use(express.static(__dirname + '/public'));

  //Set The Templating Engine To EJS (Could Use Jade, handlebars etc.)
  //Require expressLayouts Above And 'use' it Here - app.use(expressLayouts)
  app.set('view engine', 'ejs')
  app.use(expressLayouts)

//Connect to DataBase
//.env file contains DB_URI hidden through process.env.
mongoose.connect(process.env.DB_URI);

  //Set The Routes
  //requireing routes.js file app.use(require('./app/routes'))
  //In the app folder in routes.js file.
  app.use(require('./app/routes'))


  //Start Server Which Is Listening On PORT
  //Creating A Function To Console.Log Where The App Is Listening
  app.listen(port, () => {
    console.log(`App Listening on http://localhost:${port}`);
  });
