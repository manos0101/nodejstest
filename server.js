var http = require('http');


http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-type': 'text/html'
	});
	response.end("Hello there");
}).listen(3000);

console.log("test");