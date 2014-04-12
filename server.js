"use strict";
var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var port        = process.env.PORT || 8787;
var database    = require('./config/database');

mongoose.connect(database.url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('Connection to DB is successful');
});

app.configure(function() {
    app.use(express.favicon());
    app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

require('./app/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
