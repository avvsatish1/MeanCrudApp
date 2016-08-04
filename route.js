var express = require('express');
var router  = express.Router();

var student = require('./model/Student');
student.methods(['get','post','delete','put']);
student.register(router,'/students');

module.exports = router;
	
