app.get('/', function(req,res){
  res.redirect('/countries');
});

require('./countries');

app.get('*', function(req,res){
  res.render('404');
});