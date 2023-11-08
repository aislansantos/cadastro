const purchaseOrderModels = require("../models/purchaseOrderModels");
const itemPurchaseOrderModels = require("../models/itensPurchaseModels");

const getAllPurchaseOrder = async (req, res) => {
    const purchaseOrder = await purchaseOrderModels.getAllPurchaseOrder();
    return res.status(200).json(purchaseOrder);
};

// função que junta duas responsabilidades para consulta somente
const getPurchaseOrderWithItens = async (req, res) => {
    try {
        const { numero_pedido } = req.params;
        const purchaseOrder = await purchaseOrderModels.getPurchaseOrder(
            numero_pedido
        );
        const itemPurchaseOrder =
            await itemPurchaseOrderModels.getItensForPurchaseOrder(
                purchaseOrder[0].Id_compra
            );

        return res.status(200).json([purchaseOrder, itemPurchaseOrder]);
    } catch (error) {
        // Lide com erros apropriadamente aqui
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
};

const getPurchaseOrder = async (req, res) => {
    const { numero_pedido } = req.params;
    const purchaseOrder = await purchaseOrderModels.getPurchaseOrder(
        numero_pedido
    );
    return res.status(200).json(purchaseOrder);
};

const createPurchaseOrder = async (req, res) => {
    const createdPurchaseOrder = await purchaseOrderModels.createPurchaseOrder(
        req.body
    );

    return res
        .status(201)
        .json(`Cadastrado Pedido ID: ${createdPurchaseOrder.insertId}!`);
};

const deletePurchaseOrder = async (req, res) => {
    const purchaseOrder = req.body;
    await purchaseOrderModels.deletePurchaseOrder(purchaseOrder);
    return res.status(400).json();
};

module.exports = {
    getAllPurchaseOrder,
    getPurchaseOrder,
    getPurchaseOrderWithItens,
    createPurchaseOrder,
    deletePurchaseOrder,
};
