const express = require("express"); //import express module
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");

const app = express(); //initializing express module

const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

/**
  SEPARATE THIS ROUTES TO DEDICATED ROUTER FILES
  (transfer this to router.js)
  app.get("/", (req, res) => {
  res.render("index");
  });
  app.get("/add-user", (req, res) => {
    res.render("add_user");
  });
  app.get("/update-user", (req, res) => {
    res.render("update_user");
  });
 */

//load routes
app.use("/", require("./server/routes/router"));

// will listen to the port number 8080 or heroku port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
