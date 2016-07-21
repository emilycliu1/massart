var express = require("express");
var app = express();
var http = require("http").Server(app); // http refers to an http library, we use the Server propoerty and apply to the app
var io = require("socket.io")(http);

var chatArchive = [];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function(req, res) { // the "/" is just localhost:3000, with no extra stuff
	res.send("Hello, bonjour, buenos dias");
});

io.on("connection", function(socket){
	console.log("new client connection");
	socket.on("chat message", function(msg){ // take that message called "chat message" from chat_client.js and do this function // "chat message" and "msg" could be anything, so long as they are consistent
		chatArchive.push(msg);
		io.emit("chat message", msg); // sending out that message back to chat_client.js
	});
});

app.get("/get_archive", function(req, res){
	res.send(chatArchive);
});

app.use(express.static('public')); // this public folder is a static folder
app.get('/chat', function(req,res){ // instead of sending text, we're sending a file
  res.sendFile(__dirname + '/chat_client.html');
});

http.listen(3000, function () {
	console.log("Example app listening on port 3000!"); // console log to the terminal
});