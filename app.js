// required stuff
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

var methodOverride = require('method-override');
app.use(methodOverride('_method'));
var _ = require("underscore");
var json = require('express-json');

//Mongoose and Mongo add
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('yay')
});

//mongooseTest
var countrySchema = mongoose.Schema({
  name: String,
  flag: String,
  capitol: String,
  population: Number,
  cities: [String]
})

var Country = mongoose.model('Country', countrySchema);

app.get('/countries', function (req, res) {
  Country.find({}, function (err, data) {
    res.render('index', {country: data})
  })
})

app.get('/countries/new', function (req, res) {
  res.render('newCountry');
})

app.get('/countries/:id', function (req, res) {
  Country.findById(req.params.id, function (err, data) {
    res.render('editCountry', {country: data})
  })
})

app.post('/countries', function (req, res) {
  Country.create(req.body, function (err, data) {
    res.redirect('/countries/' + data.id)
  })
})

app.put('/countries/:id', function (req, res) {
  Country.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    res.redirect('/')
  })
})

app.delete('/countries/:id', function (req, res) {
  Country.findByIdAndRemove(req.params.id, function (err, data) {
    res.send('okay');
  })
})

//if the route does not exist
app.use(function (req, res) {
  res.send('404: Page not Found', 404);
});


// where to see my library
app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
