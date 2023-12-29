const express = require("express");
const app = express();
const path = require("node:path");

app.get("^/$|index(.html)?", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("^/$|new-page(.html)?", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("^/$|old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
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

app.get(
  "/admin.html",
  (req, res, next) => {
    req.customData = "Hello World!";
    next();
  },
  (req, res, next) => {
    console.log(req.customData);
    next();
  },
  (req, res) => {
    res.send("Finish!");
  }
);

app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portu üzerinde çalışıyor.`);
});
