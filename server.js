const path = require("path");
var express = require("express");
const index = require("./index.js")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitList = [];

app.post("/api/table", function (req, res) {
  var newTable = req.body;

  newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  if (reservations.length < 5) {
    reservations.push(newTable);
  } else {
    waitList.push(newTable);
  }

  res.json(newTable);
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});