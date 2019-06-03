var express = require('express');
var app = express();
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var http = require('http');
var fs = require('fs');
var server = http.createServer(requestHandler);
var url = require('url');
//var port = process.env.PORT || 3010;


//var app = express();
//var port = process.env.PORT || 3000;

/*app.use(express.static('public'));

app.listen(port, function() {
	console.log("== The Server is listening on port: ", port);
});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
*/

function requestHandler(req, res){
		filename = 'public/homepage.html';
	fs.readFile(filename, function(err, data) {
		if(err){
			res.statusCode = 404;
			var error = fs.readFileSync('public/404.html');
			res.write(error);
			return res.end();
		}
                res.statusCode = 200;
                res.write(data);
                return res.end();
        });

}

server.listen(3000);
