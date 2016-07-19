<<<<<<< HEAD
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
=======
var express = require("express");
var app = express();

app.get("/", function (req, res) { // the "/" is just localhost:3000, with no extra stuff
  res.send("Hello, bonjour, buenos dias");
});

app.get("/goodbye", function (req, res) { // this is localhost:3000/goodbye
  res.send('Goodbye World!');
});

app.get("/monica", function (req, res) { // this is localhost:3000/monica
	var responseText = ""; // defined the variable as an empty string

	responseText += "Psst monica's a <em> nerd </em> pass it on <br>"; // added something to it, use += to add on instead of wholly defining
	responseText += "But that's okay she's still cool"; // added another thing to it
	responseText += "<br>"
	responseText += "<img src = 'http://emojipedia-us.s3.amazonaws.com/cache/80/9b/809b8e422f88d1b45305897877109d1c.png' >"

	res.send(responseText); // pushed it to the window
	console.log("the stuff happened"); // this shows up in the terminal after the refresh!

});



app.listen(3000, function () {
  console.log("Example app listening on port 3000!"); // console log to the terminal
>>>>>>> 5c971d9c10381ba82022510e83c59437c43d89cf
});