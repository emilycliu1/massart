var num = require("numeral"); // importing the "numeral" module so you can format numbers
var express = require("express"); // importing the "express" module -- like a library
var app = express(); // placeholder for referencing the express functionality

var carPrice = 12000; // the car price begins at 12,000

app.get("/", function(req, res){ // when the server is told to get to this root path, do this function below
    console.log("Returning current price: " +num(carPrice).format('0,0')); // terminal gives us the current price, formatted such that there's a comma where appropriate
    res.send("<div style='text-align:center;font-size:20px;margin-top:50px;'> The current car price is<br>" +num(carPrice).format('0,0')+ "</div>"); // in the window, give us the price thus far
}); // close the function for the event handler

app.get("/add", function(req, res){ // when the server is told to get to the path/add, do this function below
    carPrice += 250; // take the current price and add 250
    confirmCarPriceChange(res); // calls a function and passes it the response object
});// close the function for the event handler

app.get("/subtract", function(req, res){ // when the server is told to get to the path/subtract, do this function below
    carPrice -= 250; // take the current price and subtract 250
    confirmCarPriceChange(res); // perform function below (logs to terminal, links to main page, which will show new price)
}); // close the function for the event handler

app.listen(3000, function () { // go to port 3000 and do this function
  console.log("Example app listening on port 3000!"); // print to terminal
}); // close the function for the event handler

function confirmCarPriceChange(res) // this is the aforementioned function
{
  console.log("Adjusted car price"); // prints to terminal that car price has been adjusted
  res.send("<div style='text-align:center;font-size:20px;margin-top:50px;'> Thank you. See current price <a href='/'> here.</a> </div>"); 
  // styles the text, shows the text in parentheses to the page requesting whichever path the function is under
}