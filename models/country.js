var mongoose = require('mongoose');

var countrySchema = new mongoose.Schema({
  name: String,
  flag: String,
  capitol: String,
  cities: Array
});

var Country = mongoose.model("Country", countrySchema);

module.exports = Country;