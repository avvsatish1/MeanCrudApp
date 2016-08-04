var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//initialize express server app
var app = new express();

// adding middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/meanapp');

//express router config
app.use('/route', require('./route'));


app.listen(3000, function(){
	console.log("connecting to server on 3000");
});