//Grab Mongoose
const mongoose = require('mongoose'),
//Grab Schema and define a Model
//-A Schema Defines what will be apart of this model.
Schema = mongoose.Schema;

//Create A Schema
//Create Location Schema
const locationSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true
  },
  description: String
});

//Create Middleware To Ensure Slug Is Created From The Name.
//This References The Model
// => Changes how "this" object is referenced. Subsituted "function"
locationSchema.pre('save', function(next) {
  this.slug = slugify(this.name);
  next();
});

//Create The Model
const locationModel = mongoose.model('Location', locationSchema);

//Export The Model
module.exports = locationModel;

//Call The Function To Slugify - changes caseing and spaces to be URL acceptable
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
