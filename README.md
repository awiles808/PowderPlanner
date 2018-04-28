
                          <!-- # PowderPlanner
npm init
npm install --save Express
npm install
npm install --save ejs express-ejs-layouts ---
(layouts allow for 1 ejs layout for all allowing for d.r.y. code)
create .gitignore file with - node_modules/ written inside.
create server.js file

  Folder/File Structure Goal
    Router File Is Concerned With Routing
    Server File Is Used Set Up Of Application
    Controller File Is For Functionality
    Server Is For Configuration and Loading

      In server.js -

Set Up Application.
Grab Dependencies.
Start A New Instance of Express & call it app.
  const express = require('express'),
    app = express();
    port = process.env.PORT || 8080;
Start Server Which Is Listening On PORT
Creating A Function To Console.Log Where The App Is Listening
    app.listen(port, () => {
      console.log(`App Listening on http://localhost:${port}`);
    });

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

      Routes-routes.js

We do not want our routes to be defined in the server.js file.
  app.use(require('./app/routes')); Pulls in all the routes to server.js file
Set The Routes In Routes.js
Keeping All Routes Away From 'server.js' File
Create A new Express Router,
Requireing express and creating a router called express.router
  const express = require('express')
    router = express.Router();
Export Router To Require In 'server.js'File
  module.exports = router;
Define routes
  router.get('/', (req, res) => {
  res.send('Yo this is the route, and the response "res", sends this message.')
})
The routes.js file is only for routing.
Export the functionality of router.get with the function res.send attached to
it. We need to move the res.send into the main.controller.js.

        Controllers

Inside main.controller.js we need to export an object.  module.exports = {
Create A New Function And Call It showHome
  module.exports = {
    showHome: (req, res) => {
      res.send('Yo this is the route, and the response "res", sends this message
      Still Works')
  }
};
Need To Import The Controller Into The Routes File.
mainController = require('./controllers/main.controller')
  router.get('/', mainController.showHome);

        Templating

npm install --save ejs express-ejs-layouts
Layouts allows for one template across all of our views .D.R.Y.
Configure what we installed in server.js
Tell Express To look For Static Assets First
Tell Express CSS Files Will Be In The Public Folder
  app.use(express.static(__dirname + '/public'));
Set EJS as templating engine (could use jade handlebars etc..)
  app.set('view engine', 'ejs');
Grab The Express Layouts Package (Declare at the top of server.js)
  expressLayouts = require('express-ejs-layouts'); -  
    Which allows us to use app.use(expressLayouts)

        Rendering  

res.render(calls for an ejs file) Looks In The Views Folder By Default     
In main.controller.js file we need to use /'render' the ejs layout.      
  module.exports = {
      showHome: (req, res) => {
        res.render('pages/home');
        res.send('Yo this is the route,and the response "res", sends this
          message. Still Works')
  }
};

        EJS Folders
Create Views Folder-Inside Views Create Pages Folder and layouts.ejs file --
Inside Pages Create home.ejs file
Inside of layouts.ejs, start html
Create Layout And Import BootStrap.
Ejs Knows How To Place The Code with the ice cream cone/clown tag<% %>
The layout takes any information in the home.ejs file and places it in the
<%body%> tag. 








  Configure Application

  Start Server Which Is Listening On PORT
  Creating A Function To Console.Log Where The App Is Listening -->
