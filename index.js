const http = require("node:http");

const server = http.createServer((request, response) => {
  const customer = {
    firstName: "Emin",
    lastName: "Başbayan",
  };
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(customer));
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
