const http = require("http");

var PORT = process.env.PORT||3000;

const server = http.createServer(function(req, res) {
    res.end(req.socket.remoteAddress);
});

server.listen(PORT);