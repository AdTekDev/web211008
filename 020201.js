const http = require("http");

const hostname = "localhost";

const port = 3000;
var solan = 0;

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        //res.end('{ "message" : "Hello" , "Num." : ' + solan + ' }');
        console.log("--- request !!!", solan++ , req.url);

        switch(req.url) {
            case "/home": {
                res.writeHead(200);
                res.end("<h1> Home page ! </h1>");
                break;
            }
            case "/order": {
                res.writeHead(200);
                res.end("<h1> Order page ! </h1>");
                break;
            }
            case "/products": {
                res.writeHead(200);
                res.end("<h1> Products page ! </h1>");
                break;
            }
            case "/about": {
                res.writeHead(200);
                res.end("<h1> About page ! </h1>");
                break;
            }
            case "/login": {
                res.writeHead(200);
                res.end("<h1> Login page ! </h1>");
                break;
            }
            case "/signin": {
                res.writeHead(200);
                res.end("<h1> Signin page ! </h1>");
                break;
            }
            case "/logout": {
                res.writeHead(200);
                res.end("<h1> logout page ! </h1>");
                break;
            }
            case "/contact": {
                res.writeHead(200);
                res.end("<h1> Contact page ! </h1>");
                break;
            }
            default: {
                res.writeHead(200);
                res.end("<h1> ... ERROR ! </h1>");
                break;
            }
        }
    }
)

server.listen( port, hostname, 
    () => {
        console.log("Listen !!!" , hostname , port );

    });
