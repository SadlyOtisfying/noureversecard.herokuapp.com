const http = require("http");

var PORT = process.env.PORT||3000;

const server = http.createServer(function(req, res) {
    res.end(req.headers["x-forwarded-for"]);
});

server.listen(PORT);