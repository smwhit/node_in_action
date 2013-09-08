var net = require('net');

var server = net.createServer(function(socket){
    var id = socket.remoteAddress + ':' + socket.remotePort;
    console.log('A new connection was made:', id);

    socket.on('data', function(data) {
        socket.write(data);
    });

    socket.once('data', function(data){
        console.log('one time only');
    });

});

server.listen(8888);
console.log('listening on port 8888');