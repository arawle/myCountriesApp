// required stuff
var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var _ = require("underscore");
var json = require('express-json');
var mongoose = require('mongoose');

app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

require('./controllers');

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
