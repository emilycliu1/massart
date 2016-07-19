var http = require("http");


http.createServer(function(request, response) {
<<<<<<< HEAD
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello DSGN 376. I'm so excited to work with you!");
  response.end();
}).listen(8888);
=======
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("La di da di da di da");
	response.end();
}).listen(8888); // this server is listening on port 8888
>>>>>>> 5c971d9c10381ba82022510e83c59437c43d89cf
