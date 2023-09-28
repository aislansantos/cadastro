const express = require("express");
const cadastroController = require("./controller/cadastrosController");

const router = express.Router();

router.get("/cadastros", cadastroController.getAll);
router.post("/cadastro", cadastroController.createAgente);

module.exports = router;
