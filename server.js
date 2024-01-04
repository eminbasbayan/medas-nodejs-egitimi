const path = require("node:path");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const reqHandler = require("./middleware/reqHandler");

const app = express();
const PORT = process.env.PORT || 5000;

const whiteList = [
  "https://www.google.com.tr",
  "https://bilgisayargenetigi.com",
  "http://localhost:5000",
];

app.use(reqHandler);

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Bu adrese izin verilmedi!"));
    }
  },
};

// Cross Origin Resource Sharing (CORS)
app.use(cors(corsOptions));

// content-type application/x-www-form-urlendcoded
app.use(express.urlencoded({ extended: false }));

// built-in middleware json
app.use(express.json());

// server static files
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./routes/route.js"));
app.use("/products", require("./routes/api/products.js"));
app.use("/register", require("./routes/register.js"));

app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portu üzerinde çalışıyor.`);
});
