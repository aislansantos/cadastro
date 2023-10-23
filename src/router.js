const express = require("express");
const cidadesController = require("./controller/cidadesController");
const cadastroController = require("./controller/cadastrosController");
const produtosController = require("./controller/produtosController");
const purchaseOrderController = require("./controller/purchaseOrderController");
const cidadesMiddleware = require("./middleware/cidadesMiddleware");
const cadastroMiddleware = require("./middleware/agentMiddleware");
const productsMiddleware = require("./middleware/productsMiddleware");
const purchaseOrderMiddleware = require("./middleware/purchaseOrderMiddleware");

const router = express.Router();

router.get("/cadastros", cadastroController.getAll);
router.get(
    "/cadastro/:nome",
    cadastroMiddleware.validateGet,
    cadastroController.getAgente
);
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

// referente as rotas de pedido de compra
router.get("/purchasesOrder", purchaseOrderController.getAllPurchaseOrder);
router.post(
    "/purchaseOrder",
    purchaseOrderMiddleware.validateData,
    purchaseOrderController.createPurchaseOrder
);

//referente as rotas de cidade
router.get("/cidades", cidadesController.getAllCities);
router.get("/cidade/:municipio", cidadesController.getCity);
router.post(
    "/cidade",
    cidadesMiddleware.validateCity,
    cidadesMiddleware.validateCityExistForName,
    cidadesController.createCity
);
router.delete("/cidade/:id",cidadesMiddleware.validateCityExist, cidadesController.deleteCity);
router.put("/cidade/:id",cidadesMiddleware.validateCityExist, cidadesController.updateCity);

module.exports = router;
