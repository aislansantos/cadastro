const purchaseOrderModels = require("../models/purchaseOrderModels");

const getAllPurchaseOrder = async (req, res) => {
    const purchaseOrder = await purchaseOrderModels.getAllPurchaseOrder();
    return res.status(200).json(purchaseOrder);
};


module.exports = {
    getAllPurchaseOrder,
};
