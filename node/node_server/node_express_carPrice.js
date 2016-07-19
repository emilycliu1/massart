var express = require("express");
var app = express();

var carPrice;
var carColor;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});



app.get("/", function (req, res) {
  res.send("Hello World!");
});


app.get("/set_car", function(req, res){
    console.log(req.query.price); // puts it in the terminal upon submitting
    console.log(req.query.color);

    carPrice = req.query.price;
    carColor = req.query.color;
});

app.get("/retrieve_car", function(req, res){

	res.send("The car costs $" +carPrice+ " and the color is " +carColor);
	console.log("the description has been sent!")
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!"); // upon refresh, lets you know things are working in the terminal
});