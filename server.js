var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
//var twitNumber;

var sororityPhotos = require('./sororityPhotos');
var activePhotos = require('./activePhotos');
var registerData = require('./registerData');

//mongoDB stuff when we need it
/*var MongoClient = require('mongodb').MongoClient;
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.eng.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var DBName = process.env.MONGO_DB_NAME;*/

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
  if(page == "active"){
    //don't let the button be displayed on this page
    res.status(200).render('photoPageActives', sororityPhotos[page]);
  }
  else if(sororityPhotos[page]){
    res.status(200).render('photoPages', sororityPhotos[page]);
  }
  else if(activePhotos[page]){
    res.status(200).render('photoPages', activePhotos[page]);
  }
  else if(page == "about"){
    res.status(200).render('aboutPage');
  }
  else if(page == "register"){
    res.status(200).render('registerPage', registerData[page]);
  }
  else{
    next();
  }
});

app.get('/active/:type', function(req, res, next){
  var page = req.params.type.toLowerCase();
  if(activePhotos[page]){
    res.status(200).render('photoPages', activePhotos[page]);
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
