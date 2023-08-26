const http = require("http");

const fs = require("fs").promises;

const requestListener = function(req, res) {

  if (req.url === '/') {
    fs.readFile(__dirname + "/react.html").then(contents => {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.writeHead(200);
      res.end(contents);
    })
  } else {
    fs.readFile(__dirname + "/randomDataIStoleFromTheInstructor.json")
      .then(contents => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      })
  }
}

const server = http.createServer(requestListener);

const host = "0.0.0.0";
const port = 8000;

server.listen(port, host, () => {
  console.log("server is running");
})