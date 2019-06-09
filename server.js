var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');


var sororityPhotos = require('./sororityPhotos');
var activePhotos = require('./activePhotos');
var registerData = require('./registerData');

//mongoDB stuff when we need it
var MongoClient = require('mongodb').MongoClient;
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;


var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

var app = express();
var port = process.env.PORT || 3011;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/', function(req, res, next){
    res.status(200).render('homepage');
})


app.get('/register', function(req, res, next){
	var collection = db.collection('register');
	collection.find({}).toArray(function(err, register){
		if(err){
			res.status(500).send({
				error: "Error fetching data from DB"
			});
		}else{
			res.status(200).render('registerPage',{
				peopleComing: register,
			});
		}
	});
});

app.post('/register/addRegister', function(req, res, next){
  if(req.body && req.body.name && req.body.major && req.body.email && req.body.eventsComing){
    var collection = db.collection('register');
    collection.insertOne(
      {name: req.body.name,
      major: req.body.major,
      email: req.body.email,
      eventsComing: req.body.eventsComing},
      function (err, result){
        if(err){
          res.status(500).send({
            error: "Error inserting registration info"
          });
        }else{
            res.status(200).send("Success");
        }
      }
    );
  }else{
    res.status(400).send("Request needs a body with all fields");
  }

});

app.get('/about', function(req, res, next){
    res.status(200).render('aboutPage');
});

app.get('/:photoType', function (req, res, next) {
  var photoType = req.params.photoType;
  var collection = db.collection('sororityPhotos');
  collection.find({ photoID: photoType }).toArray(function (err, sororityPhotos) {
    if (err) {
      res.status(500).send({
        error: "Error fetching photos from DB"
      });
    } else {
      if(photoType == "active"){
        res.status(200).render('photoPageActives', sororityPhotos[0]);
      }else{
      res.status(200).render('photoPages', sororityPhotos[0]);
    }
    }
  });
});

app.post('/:photoType' + '/addPhoto', function(req, res, next){
  var photoType = req.params.photoType;
  if(req.body && req.body.url && req.body.caption){
    var collection = db.collection('sororityPhotos');
    var photo = {
      url: req.body.url,
      caption: req.body.caption
    }
    collection.updateOne(
      {photoID: photoType},
      {$push: {photos: photo}},
      function (err, result){
        if(err){
          res.status(500).send({
            error: "Error inserting photos"
          });
        }else{
            res.status(200).send("Success");
        }
      }
    );
  }else{
    res.status(400).send("Request needs a body with all fields");
  }
});

app.get('*', function (req, res, next) {
  res.status(404).render('404');
});

MongoClient.connect(mongoUrl, function(err, client){
  if(err){
    throw err;
  }
  db = client.db(mongoDBName);
  app.listen(port, function(){
    console.log("Server is running on port", port);
  });
});
