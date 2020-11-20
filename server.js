// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var index= require("index.js")

// Sets up the Express App
// =============================================================
var app = express();
//var PORT = 3000;       
var PORT=process.env.PORT||3001 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
