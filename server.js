const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/products", (req, res) => {
  res.status(200).send("Products Page");
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
