// Requisição do módulo http do node
var http = require('http');
var url = require('url');
var fs = require('fs');

// Executa método de criação de servidor
var server = http.createServer(function(request, response) {
	fs.readFile(__dirname + "/index.html", function(err,html){
		response.writeHead(200, {'Content-Type':'text/html'});	
		response.write(html);
		response.end();
	})	
});

server.listen(3333, function(){
	console.log("Servidor Rodando!")
});