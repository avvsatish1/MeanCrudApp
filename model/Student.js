var restful = require('node-restful');
var mongoose = restful.mongoose;

var studentSchema = new mongoose.Schema({
	name: String,
	type:String,
	email:String,
	password:String
});

module.exports = restful.model('student', studentSchema);

