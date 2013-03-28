var Server = require('pomelo-rpc').server;

// remote service path info list
var paths = [
    {namespace: 'user',serverType:'area', path: __dirname + '/remote/test'}
];

var port = 3333;

var server = Server.create({paths: paths, port: port});
server.start();
console.log('rpc server started.');