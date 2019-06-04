var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var twitNumber;

var sororityPhotos = require('./sororityPhotos');

var app = express();
var port = process.env.PORT || 3000;



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.status(200).render('homepage');
});

app.get('/:type', function(req, res, next){
  var page = req.params.type.toLowerCase();
  if(sororityPhotos[page]){
    res.status(200).render('photoPages', sororityPhotos[page]);
  }
});

app.get('*', function (req, res, next) {
  res.status(404).render('404');
});

app.listen(port, function (err) {
  if(err){
    throw err;
  }
  console.log("== Server is listening on port", port);
});
