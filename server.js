var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3010;

app.listen(port, function() {
	console.log("== The Server is listening on port: ", port);
});
