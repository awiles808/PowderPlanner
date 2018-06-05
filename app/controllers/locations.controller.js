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
  seedLocations: seedLocations
}

  //Show All Locations
  function showLocations(req, res) {
    //All Events
    Location.find({},(err, locations) => {
      if (err) {
        res.status(404);
        res.send('Locations not found');
      }
          //Return A View With Data
          res.render('pages/locations', { locations: locations });
    });
}

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
function showLocation(req, res) {
  // get a single event
  Location.findOne({ slug: req.params.slug }, (err, location) => {
    if (err) {
      res.status(404);
      res.send('Location not found!');
    }

    res.render('pages/location', { location: location });
  });
}

//Seed Our DataBase
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








 // const locations = [
 //   {name: 'Colorado', slug: 'colorado', description: 'Winter Park'},
 //   {name: 'Alaska', slug: 'alaska', description: 'Mt. Denali'},
 //   {name: 'Ausrtria',slug: 'austria', description: 'Saalbach'}
 // ];
 // showSingle: (req ,res) => {
 //   //Get A Sinle Location
 //   const location = { name: 'Alaska', slug: 'alaska', description: 'Mt.Denali'};
 //
 //   res.render('pages/single', { location: location});
 // },
