const url = require('url');
const fs = require('fs');

function renderHTML(path, response) {
	fs.readFile(path, function(error, data) {
		if(error){
			response.writehead(404);
			response.write('Erreur 404');
		}
		else {
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request, response) {
		response.writeHead(200, {'Content-Type' : 'text/html'});

		let path = url.parse(request.url).pathname;
		switch (path) {
			case '/': 
				renderHTML('./index.html', response);
				break;
			case '/about':
				renderHTML('./about.html', response);
				break;
			default:
				response.writeHead(404);
				response.write('Page non trouvée : vous avez saisi une mauvaise adresse');
				response.end();
		}

	}
};