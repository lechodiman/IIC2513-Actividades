let http = require('http');

function onRequest(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("Hello World, " + req.url);
	res.end();
}

let server = http.createServer(onRequest);
server.listen(8080);
