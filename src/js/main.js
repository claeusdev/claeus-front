var alertStars = require("./lib/alertstars");
var _ = require("underscore");
var $ = require("jquery");

window.onload = function(){
	var messages = [
		"Welcome",
		"My name is Nana Adjei Manu",
		"I am a Software Engineer based in Accra, Ghana."
	];

	_.each(messages, function(message){
		$("body").append(message);
	});

	console.log("Beautiful");
}