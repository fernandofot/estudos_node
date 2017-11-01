var http = require ('http');

//create a server Object:
http.createServer(function(req, res){
  res.write('Hello World!'); //write a response to the client
  res.end();// end the response
}).listen(8080); //the server Object listen on port 8080
