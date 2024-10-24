const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

//DB CONNECT
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

//PORT
const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("HEllo");
  console.log(process.env.DATABASE);
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
