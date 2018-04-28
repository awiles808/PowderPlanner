//Inside main.controller.js we need to export an object.  module.exports{}
//Create A New Function And Call It showHome:(req, res) => {}
//Send A Message (res.send) With Our object (our homepage)
//Render Our EJS (res.render) Template (our homePage) Looks In The Views Folder

module.exports = {
  showHome: (req, res) => {
      res.render('pages/home')
      // res.send('Yo this is the route,and the response "res", sends this message. Still Works')
  }
};
