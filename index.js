const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  const name = "Emin Başbayan";
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      response.writeHead(500);
      response.end("Error loading the file!");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data.replace("{{name}}", name));
    }
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
