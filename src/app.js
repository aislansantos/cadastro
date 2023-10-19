const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    app.use(cors());
    next();
});

app.use(express.json());
app.use(router);

module.exports = app;
