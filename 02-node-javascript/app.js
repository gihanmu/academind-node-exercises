var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2')
const onRequestHandler = (request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write(module2.myVariable);
    module1.myFunction();
    response.end();
}

http.createServer(onRequestHandler).listen(8000);
