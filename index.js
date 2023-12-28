const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/products") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Products Page");
  } else if (req.url === "/api/customers") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify([
        {
          firstName: "Emin",
          lastName: "Başbayan",
        },
        {
          firstName: "Emine",
          lastName: "Başbayan",
        },
      ])
    );
  } else {
    res.writeHead(404);
    res.end("Page not found!");
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
