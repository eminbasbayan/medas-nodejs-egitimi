const path = require("node:path");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Cross Origin Resource Sharing (CORS)
app.use(cors());

// content-type application/x-www-form-urlendcoded
app.use(express.urlencoded({ extended: false }));

// built-in middleware json
app.use(express.json());

// server static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("^/$|index(.html)?", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form verileri alındı ve işlendi.");
});

app.post("/api/create/product", (req, res) => {
  console.log(req.body);
  res.send("Yeni Ürün Oluşturuldu!");
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

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portu üzerinde çalışıyor.`);
});
