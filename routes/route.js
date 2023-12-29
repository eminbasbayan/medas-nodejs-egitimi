const path = require("node:path");
const express = require("express");
const router = express.Router();

router.get("^/$|index(.html)?", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form verileri alındı ve işlendi.");
});

router.post("/api/create/product", (req, res) => {
  console.log(req.body);
  res.send("Yeni Ürün Oluşturuldu!");
});

router.get("^/$|new-page(.html)?", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

router.get("^/$|old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

/* API Route */
router.get("/api/customers", (req, res) => {
  res.status(200).send(newProducts);
});

router.get(
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

module.exports = router;
