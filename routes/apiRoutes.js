//modules
const express = require('express');
const path = require('path');

//data files
const tables = require('../data/tables');
const waitlist = require('../data/waitlist');

const apiRouter = express.Router()

apiRouter.get('/tables', (req, res) => {
    res.json(tables)
})

apiRouter.get('/waitlist', (req,res) => {
    res.json(waitlist)
})

apiRouter.post('/tables', (req, res) => {
    if (tables.length < 5) {
        tables.push(req.body);
        res.json('Added to tables');
    } else {
        waitlist.push(req.body);
        res.json('Added to waitlist');
    }
})

apiRouter.post("/tables/clear", (req, res) => {
    tables.length = 0;
    res.json('Tables cleared')
});

apiRouter.delete("/waitlist/clear", (req, res) => {
    waitlist.length = 0;
    res.json("Waitlist cleared");
});


module.exports = apiRouter