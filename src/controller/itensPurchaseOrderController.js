const itemPurchaseOrderModel = require("../models/itensPurchaseModels");

const getItemPurchaseOrder = async (req, res) => {
    const { numero_pedido } = req.params;
    const purchaseOrder = await itemPurchaseOrderModel.getItensForPurchaseOrder(
        numero_pedido
    );
    return res.status(200).json(purchaseOrder);
};

module.exports = {
    getItemPurchaseOrder,
};
