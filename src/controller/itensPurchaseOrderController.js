const itemPurchaseOrderModel = require("../models/itensPurchaseModels");

const getItemPurchaseOrder = async (req, res) => {
    const { numero_pedido } = req.params;
    const purchaseOrder = await itemPurchaseOrderModel.getItensForPurchaseOrder(
        numero_pedido
    );
    return res.status(200).json(purchaseOrder);
};

const getAllItensPurchaseOrder = async (req, res) => {
    const itens = await itemPurchaseOrderModel.getAllItensPurchaseOrder();
    return res.status(200).json(itens);
};

module.exports = {
    getItemPurchaseOrder,
    getAllItensPurchaseOrder,
};
