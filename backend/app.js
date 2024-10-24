const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//*---Db Connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

//*---Middleware

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);

app.use(cookieParser());
app.use(cors());

//*---error middleware

app.use(errorHandler);

//*---Port
const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("HEllo");
  console.log(process.env.DATABASE);
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
