const http = require("http");
const fs = require("fs");

var PORT = process.env.PORT||3000;

const server = http.createServer(function(req, res) {
    var ip = req.headers["x-forwarded-for"]||req.socket.remoteAddress.replace("::ffff:", "");
    if(req.method==="GET"&&req.url==="/favicon.ico") {
        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream("favicon.ico").pipe(res);
    }
    else
        res.end(ip);
    console.log(ip)
});

server.listen(PORT);