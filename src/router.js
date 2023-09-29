const express = require("express");
const cadastroController = require("./controller/cadastrosController");
const produtosController = require("./controller/produtosController");
const cadastroMiddleware = require("./middleware/agentMiddleware");
const productsMiddleware = require("./middleware/productsMiddleware");

const router = express.Router();

router.get("/cadastros", cadastroController.getAll);
router.post(
    "/cadastro",
    cadastroMiddleware.validateBody,
    cadastroController.createAgente
);
router.delete("/cadastro/:nome", cadastroController.deleteAgente);
router.put(
    "/cadastro/:id",
    cadastroMiddleware.validateBody,
    cadastroController.updateAgente
);

// Routes referente a podutos
// cadastro de tipos de produtos
router.get("/typesproducts", produtosController.getAllTypeProcuct);
router.post(
    "/typeproducts",
    productsMiddleware.validateTypeBody,
    produtosController.createTypeProduct
);
router.delete("/typeproducts/:descricao", produtosController.deleteTypeProduct);
router.put("/typeproducts/:id", produtosController.updateTypeProduct);

//referente as rotas dos produtos
router.get("/products", produtosController.getAllProducts);
router.post(
    "/product",
    productsMiddleware.validateProductBody,
    produtosController.createProduct
);

module.exports = router;
