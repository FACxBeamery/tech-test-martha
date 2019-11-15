const express = require("express");
const router = require("./router.js");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    next();
});

app.use(router);

module.exports = app;
