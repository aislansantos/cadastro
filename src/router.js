const express = require("express");
const cadastroController = require("./controller/cadastrosController");

const router = express.Router();

router.get("/cadastros", cadastroController.getAll);

module.exports = router;
