const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("allowedHeaders", "Content-Type");
    app.use(cors());
    next();
});

app.use(express.json());
app.use(router);

module.exports = app;
