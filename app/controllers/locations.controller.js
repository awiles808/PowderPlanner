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
}

  //Show All Locations
  function showLocations(req, res) {

    Location.find({},(err, locations) => {
      if (err) {
        res.status(404);
        res.send('Locations not found');
      }
          //Return A View With Data
          res.render('pages/locations', { locations: locations });
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
    res.render('pages/create');
  }

//Process The Create Form
  function processCreate(req, res) {
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


















//Create form
//
// function showCreate(req, res) {
//   res.render('locations/create');
//
// }
//
// //Process Create form
//
// function processCreate(req, res) {
//   //Create A new Event
//   const location = new Location({
//     name: req.body.name,
//     description: req.body.description
//   });
//
//   location.save((err) => {
//     if(err)
//       throw err;
//
// //Redirecting To New Event
//     res.redirect(`/locations/${locations.slug}`);
//   });
//
// }
//

















 // const locations = [
 //   {name: 'Colorado', slug: 'colorado', description: 'Winter Park'},
 //   {name: 'Alaska', slug: 'alaska', description: 'Mt. Denali'},
 //   {name: 'Ausrtria',slug: 'austria', description: 'Saalbach'}
 // ];
 // showLocation: (req ,res) => {
 //   //Get A Sinle Location
 //   const location = { name: 'Alaska', slug: 'alaska', description: 'Mt.Denali'};
 //
 //   res.render('pages/single', { location: location});
 // },
 //Show A Single Location
 // function showLocation(req, res) {
 //     //Get A Sinle Location
 //     Location.findOne({ slug: req.parms.slug }, (err, location) => {
 //       if (err) {
 //         res.status(404);
 //         res.send('Location not found');
 //       }
 //
 //       res.render('pages/location', { location: location });
 //     })
 //   }
