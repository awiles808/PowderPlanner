//Inside locations.controller.js we need to export an object.  module.exports{}
//Create A New Function to show Locations And Call It showLocations:(req, res) => {}
//Create A Const Named Locations With An Array Of Objects
//Slugs Allow Us To Link To The Specifc URL
//Render Our EJS (res.render) Template (our locationsPage) Looks In The Views Folder
//Reneder The "Location" Model To Use In The Function When Seeding DataBase
const Location = require('../models/location');
module.exports = {
  showLocations: showLocations,
  showLocation: showLocation,
  seedLocations: seedLocations,
  showCreate: showCreate,
  processCreate: processCreate,
  showEdit: showEdit,
  processEdit: processEdit,
  deleteLocation: deleteLocation

}

  //Show All Locations
  function showLocations(req, res) {

    Location.find({},(err, locations) => {
      if (err) {
        res.status(404);
        res.send('Locations not found');
      }
          //Return A View With Data
          res.render('pages/locations', {
            locations: locations,
            success: req.flash('success')

           });
    });
}

function showLocation(req, res) {
  // Show A Location
  Location.findOne({ slug: req.params.slug }, (err, location) => {
    if (err) {
      res.status(404);
      res.send('Location not found!');
    }

    res.render('pages/location', {
      location: location,
      success: req.flash('success')
    });
  });
}

  //Seed Our Database
  function seedLocations(req, res) {
    //Create Locations
    const locations = [
      { name: 'Colorado', description: 'Winter Park'},
      { name: 'Alaska', description: 'Mt. Denali'},
      { name: 'Ausrtria', description: 'Saalbach'},
      { name: 'New Mexico', description: 'Angel Fire'}
  ];

  // Create Locations Model To Save
  // Create For Loop
  Location.remove({}, () => {
    for (location of locations) {
      var newLocation = new Location(location);
      newLocation.save();
    }
  });


  //DataBase Has Been Seeded
  res.send('Database seeded');
  }


  function showCreate(req, res) {
    res.render('pages/create', {
      errors: req.flash('errors')
    });
  }

  //Process The Create Form
  function processCreate(req, res) {
    //Validate Information
    //req.body beacuse it is coming form a fourm. - checkParam is for a URL Param
    req.checkBody('name', 'Name is required.').notEmpty();
    req.checkBody('description', 'Description Is Required.').notEmpty();

  //Errors Redirects To Previous Page.
  const errors = req.validationErrors();
  if(errors) {
    req.flash('errors', errors.map(err => err.msg));
    return res.redirect('/locations/create');
  }

    // create a new lcoation
    const location = new Location({
      name: req.body.name,
      description: req.body.description
    });

    // Save Location
    location.save((err) => {
      if (err)
        throw err;

    //Create A Succesful Flash Message
    req.flash('success', 'Succesfully Created A New Location!');



      // Redirect To New Location Created
      res.redirect(`/locations/${location.slug}`);
    });
  }

//Show The Edit form
function showEdit(req, res) {
  Location.findOne({ slug: req.params.slug }, (err, location) => {
    res.render('pages/edit', {
      location: location,
      errors: req.flash('errors')
    });
  });
}

//Process The Edit Form
function processEdit(req, res) {
  // Validate Information
  req.checkBody('name', 'Name is required.').notEmpty();
  req.checkBody('description', 'Description is required.').notEmpty();

  // if there are errors, redirect and save errors to flash
  const errors = req.validationErrors();
    if (errors) {
      req.flash('errors', errors.map(err => err.msg));
      return res.redirect(`/locations/${req.params.slug}/edit`);
}

//Finding A Location
Location.findOne({ slug: req.params.slug }, (err, location) => {
   // Updating That Location
   location.name        = req.body.name;
   location.description = req.body.description;

   location.save((err) => {
     if (err)
       throw err;

     // Success Message
     // Redirect Back To The /Events
     req.flash('success', 'Successfully updated location.');
     res.redirect('/locations');
   });
 });

}
//Delete A Locaiton
function deleteLocation(req, res) {
  Location.remove({ slug: req.params.slug }, (err) => {
    //Set Flash Data
    req.flash('success', 'Location Deleted!');
    //Redirect To Locations Page
    res.redirect('/locations');

  });
}
