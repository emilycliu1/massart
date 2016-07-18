var http = require("http");


http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("La di da di da di da");
	response.end();
}).listen(8888); // this server is listening on port 8888