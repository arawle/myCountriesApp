var db = require('../models/index');

app.get('/countries', function (req, res) {
  db.Country.find({}, function (err, data) {
    res.render('countries/index', {country: data});
  });
});

app.get('/countries/new', function (req, res) {
  res.render('countries/newCountry');
});

app.get('/countries/:id', function (req, res) {
  db.Country.findById(req.params.id, function (err, data) {
    res.render('countries/editCountry', {country: data});
  });
});

app.post('/countries', function (req, res) {
  db.Country.create(req.body, function (err, data) {
    res.redirect('/countries/' + data.id);
  });
});

app.put('/countries/:id', function (req, res) {
  db.Country.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    res.redirect('/');
  });
});

app.delete('/countries/:id', function (req, res) {
  db.Country.findByIdAndRemove(req.params.id, function (err, data) {
    res.send('okay');
  });
});