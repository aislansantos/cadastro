const express = require("express");
const cadastroController = require("./controller/cadastrosController");
const cadastroMiddleware = require("./middleware/agentMiddleware");

const router = express.Router();

router.get("/cadastros", cadastroController.getAll);
router.post("/cadastro", cadastroMiddleware.validateBody, cadastroController.createAgente);
router.delete("/cadastro/:nome", cadastroController.deleteAgente);
router.put("/cadastro/:id",cadastroMiddleware.validateBody, cadastroController.updateAgente);

module.exports = router;
