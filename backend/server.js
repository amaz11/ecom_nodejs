const express = require("express");
const app = express();
const cors = require("cors");
// const cookieParser = require("cookie-parser");
require("dotenv").config();

// DataBase
require("./db");

// middleware

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//REST APIs
app.use("/api/auth", require("./routes/auth"));
//error handler
app.use(require("./middleware/errorHandler"));

var server = app.listen(8081, function () {
  var port = server.address().port;

  console.log(`Example app listening at http://localhost:${port}`);
});
