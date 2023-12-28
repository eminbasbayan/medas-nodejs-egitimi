const express = require("express");
const app = express();
const path = require("node:path");

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/products", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "products.html"));
});

/* API Route */
app.get("/api/customers", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      firstName: "Emin",
      lastName: "Başbayan",
    },
  ]);
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portu üzerinde çalışıyor.`);
});
