//Inside locations.controller.js we need to export an object.  module.exports{}
//Create A New Function to show Locations And Call It showLocations:(req, res) => {}
//Create A Const Named Locations With An Array Of Objects
//Slugs Allow Us To Link To The Specifc URL
//Render Our EJS (res.render) Template (our locationsPage) Looks In The Views Folder
//Reneder The "Location" Model To Use In The Function When Seeding DataBase
const Location = require('../models/location');
module.exports = {

  //Show All Locations
showLocations: (req, res) => {

const locations = [
  {name: 'Colorado', slug: 'colorado', description: 'Winter Park'},
  {name: 'Alaska', slug: 'alaska', description: 'Mt. Denali'},
  {name: 'Ausrtria',slug: 'austria', description: 'Saalbach'}
];


//Return A View With Data
  res.render('pages/locations', { locations: locations});

},

//Show A Single Location
  showSingle: (req ,res) => {
    //Get A Sinle Location
    const location = { name: 'Colorado', slug: 'colorado', description: 'Winter Park'};

    res.render('pages/single', { location: location});
  },
  showSingle: (req ,res) => {
    //Get A Sinle Location
    const location = { name: 'Alaska', slug: 'alaska', description: 'Mt.Denali'};

    res.render('pages/single', { location: location});
  },
  showSingle: (req ,res) => {
    //Get A Sinle Location
    const location = { name: 'Austria', slug: 'austria', description: 'Saalbach'};

    res.render('pages/single', { location: location});
  },

// //Seed Our DataBase
//   seedLocations: (req, res) => {
//   //Create Locations
//   const locations = [
//     {name: 'Colorado', description: 'Winter Park'},
//     {name: 'Alaska', description: 'Mt. Denali'},
//     {name: 'Ausrtria', description: 'Saalbach'}
//   ];


  //Create Locations Model To Save
  //Create For Loop
//   for (location of locations) {
//     var newLocation = new Location(location);
//     newLocation.save();
//   }
//
//
//   //DataBase Has Been Seeded
//   res.send('Database seeded');
//   }
 };
