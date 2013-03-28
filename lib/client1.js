var Client, client, msg, paths, servers;

Client = require('pomelo-rpc').client;

paths = [
  {
    namespace: 'user',
    serverType: 'test',
    path: __dirname + '/remote/test'
  }
];

servers = {
  'test': [{
    id: 'test-server-1',
    type:'test',
    host: '127.0.0.1',
    port: 3333
  }]
};

msg = {
  namespace: 'user',
  serverType: 'test',
  service: 'service',
  method: 'echo',
  args: ['edwin liu']
};

client = Client.create({
  paths: paths,
  servers: servers
});

client.start(function(err) {
  return client.rpcInvoke('test-server-1', msg, function() {
    return console.log(arguments);
  });
});