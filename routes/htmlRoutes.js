//modules
const express = require('express');
const path = require('path');

const htmlRouter = express.Router();

htmlRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../html/index.html"));
});

htmlRouter.get('/tables', (req,res) => {
  res.sendFile(path, join(__dirname, "../html/viewtables.html"));
})

htmlRouter.get('/reserve', (req, res) => {
  res.sendFile(path, join(__dirname, "../html/reserve.html"));
})

module.exports = htmlRouter