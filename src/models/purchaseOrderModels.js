const connection = require("./connection");

const getAllPurchaseOrder = async () => {
    const query =
        "SELECT  Id_compra,  numero_pedido, obs,  date_order,  data_lacamento, nome_agente FROM pedido_compra as pc INNER JOIN cad_agentes as ca ON pc.ID_agente = ca. id ";
    const [purchaseOrder] = await connection.execute(query);
    return purchaseOrder;
};

const getPurchaseOrder = async (purchaseOrder) => {
    const query =
        "SELECT  PC.Id_compra ,PC.numero_pedido AS `Numero do Pedido`, CA.nome_agente as `Fornecedor`, PC.data_lacamento AS `Pedido Lançado Em`, PC.date_order AS `Venda Efetuada Em`, PC.obs AS `Observação` from pedido_compra as PC INNER JOIN cad_agentes AS CA on PC.`ID_agente` = CA.id WHERE numero_pedido = ?";
    const [purchasedOrder] = await connection.execute(query, [purchaseOrder]);
    return purchasedOrder;
};

const createPurchaseOrder = async (purchaseOrder) => {
    const { numero_pedido, ID_agente, obs, data_lacamento } = purchaseOrder;
    const dateUTC = new Date(Date.now());
    const query =
        "INSERT INTO pedido_compra (numero_pedido, ID_agente, obs, date_order, data_lacamento) VALUES (?,?,?,?,?)";

    const [createdPurchaseOrder] = await connection.execute(query, [
        numero_pedido,
        ID_agente,
        obs,
        dateUTC,
        data_lacamento,
    ]);

    return createdPurchaseOrder;
};

const deletePurchaseOrder = async (purchaseOrder) => {
    const query =
        "DELETE FROM pedido_compra WHERE numero_pedido = ? and  ID_agente = ?";
    const { numero_pedido, ID_agente } = purchaseOrder;
    const removedPurchaseOrder = await connection.execute(query, [
        numero_pedido,
        ID_agente,
    ]);

    return removedPurchaseOrder;
};

const updatePurchaseOrder = async (purchaseOrder) => {
    const query = "UPTADE pedido_compra SET ";
};

module.exports = {
    getAllPurchaseOrder,
    getPurchaseOrder,
    createPurchaseOrder,
    deletePurchaseOrder,
    updatePurchaseOrder,
};
