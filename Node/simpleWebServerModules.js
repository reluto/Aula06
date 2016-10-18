// Requisição do módulo http do node
var http = require('http');

// Executa método de criação de servidor
var server = http.createServer(function(request, response) {
	response.writeHead(200,{'Content-Type':'text/html'});
	var circulo = require('./circulo.js');
	response.write("um circulo de raio 4 tem a area igual a :" + circulo.area(4));
	response.end();
});

server.listen(3333, function(){
	console.log("Servidor Rodando!")
});