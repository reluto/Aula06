// Requisição do módulo http do node
var http = require('http');
var url = require('url');

// Executa método de criação de servidor
var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	
	var result = url.parse(request.url,true);
	
	for(var key in result.query){
		response.write("<h2>" + key + " : " + result.query[key] + "</h2>");
	}

	response.end();
});

server.listen(8080, function(){
	console.log("Servidor Rodando!")
});