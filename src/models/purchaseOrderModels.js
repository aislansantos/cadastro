const connection = require("./connection");

const getAllPurchaseOrder = async () => {
    const query = "SELECT * FROM pedido_compra";
    const [purchaseOrder] =await connection.execute(query);
    return purchaseOrder;
};

module.exports = {
    getAllPurchaseOrder,
};
