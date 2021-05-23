const http = require("http");
const fs = require("fs");

var PORT = process.env.PORT||3000;

const server = http.createServer(function(req, res) {
    if(req.method==="GET"&&req.url==="/favicon.ico") {
        res.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream("favicon.ico").pipe(res);
    }
    else
        res.end(req.headers["x-forwarded-for"]);
});

server.listen(PORT);