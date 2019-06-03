var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3010;

app.use(express.static('public'));

app.listen(port, function() {
	console.log("== The Server is listening on port: ", port);
});
