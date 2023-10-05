const purchaseOrderModels = require("../models/purchaseOrderModels");

const getAllPurchaseOrder = async (req, res) => {
    const purchaseOrder = await purchaseOrderModels.getAllPurchaseOrder();
    return res.status(200).json(purchaseOrder);
};

const createPurchaseOrder = async (req, res) => {
    const createdPurchaseOrder = await purchaseOrderModels.createPurchaseOrder(
        req.body
    );

    return res.status(201).json(createdPurchaseOrder);
};

module.exports = {
    getAllPurchaseOrder,
    createPurchaseOrder,
};
