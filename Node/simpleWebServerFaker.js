// Requisição do módulo http do node
var http = require('http');
var faker = require('faker');

// Executa método de criação de servidor
var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	var randomName = faker.name.findName();
	var randomImage = faker.internet.avatar();
	response.write(randomName);
	response.write("<img src='" + randomImage + "'/>");
	response.end();
});

server.listen(3000, function(){
	console.log("Servidor Rodando!")
});