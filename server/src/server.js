const express = require("express");
const router = require("./router.js");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    next();
});
// app.use((req, res, next) => {
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "accept, authorization, content-type, x-requested-with"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET,HEAD,PUT,PATCH,POST,DELETE"
//     );
//     res.setHeader("Access-Control-Allow-Origin", req.header("origin"));

//     next();
// });

app.use(router);

module.exports = app;
