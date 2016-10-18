// Requisição do módulo http do node
var http = require('http');

// Executa método de criação de servidor
var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('<h1>Página Inicial</h1>');
	response.end();
});

server.listen(3000, function(){
	console.log("Servidor Rodando!")
});