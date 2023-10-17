const connection = require("./connection");

const getAllPurchaseOrder = async () => {
    const query = "SELECT * FROM pedido_compra";
    const [purchaseOrder] = await connection.execute(query);
    return purchaseOrder;
};


const createPurchaseOrder = async (purchaseOrder) => {
    const { numero_pedido, ID_agente, obs } = purchaseOrder;
    const dateUTC = new Date(Date.now());
    const query =
        "INSERT INTO pedido_compra (numero_pedido, ID_agente, obs, date_order) VALUES (?,?,?,?)";

    const [createdPurchaseOrder] = await connection.execute(query, [
        numero_pedido,
        ID_agente,
        obs,
        dateUTC,
    ]);

    return createdPurchaseOrder;
};

module.exports = {
    getAllPurchaseOrder,
    createPurchaseOrder,
};
