const path = require("node:path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const errorHandler = require("./middleware/errorHandler");
const reqHandler = require("./middleware/reqHandler");
const verifyJWT = require("./middleware/verifyJWT");

const app = express();
const PORT = process.env.PORT || 5000;

const mongoDbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://basbayanemin12345:xnOMdByKDCy5iAt0@cluster111.kfdftyz.mongodb.net/e-commerce"
    );
    console.log("Connected to mongoDb!");
  } catch (error) {
    console.log(error);
  }
};

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

// middleware for cookies
app.use(cookieParser());

// server static files
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./routes/route.js"));
app.use("/register", require("./routes/register.js"));
app.use("/auth", require("./routes/auth.js"));
app.use("/logout", require("./routes/logout.js"));
app.use("/refresh", require("./routes/refresh.js"));

// app.use(verifyJWT);
app.use("/products", require("./routes/api/products.js"));

app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portu üzerinde çalışıyor.`);
  mongoDbConnect();
});
