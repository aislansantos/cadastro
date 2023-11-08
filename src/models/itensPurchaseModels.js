const connection = require("./connection");

const getItensForPurchaseOrder = async (idPurchase) => {
    const query =
        "SELECT PC.numero_pedido AS `Número Pedido`, CP.descricao AS `Descrição Item`, ITP.qtde AS Quantidade, ROUND(ITP.vlr_unt) AS `Valor Unitário`, ROUND(ITP.vlr_unt * ITP.qtde,2) AS `Valor Total` FROM itens_pedidos_compra AS ITP INNER JOIN cad_products AS CP ON ITP.produto_id = CP.id_product INNER JOIN pedido_compra as PC ON ITP.pedido_compra_id = PC.`Id_compra` WHERE PC.`Id_compra` =  ?";
    const [selectedItens] = await connection.execute(query, [idPurchase]);
    return selectedItens;
};

const getAllItensPurchaseOrder = async () => {
    const query = "SELECT PC.numero_pedido AS `Número Pedido`, CP.id_product AS `Id Produto`, CP.descricao AS `Descrição Produto`, IPC.qtde AS `Quantidade`, ROUND(IPC.vlr_unt,2) AS `Valor Unitário`, ROUND(IPC.qtde * IPC.vlr_unt,2) AS `Valor Total` FROM itens_pedidos_compra AS IPC INNER JOIN  cad_products AS CP ON IPC.produto_id = CP.id_product INNER JOIN pedido_compra AS PC ON IPC.pedido_compra_id = PC.`Id_compra`"; 

    const [selectedItens] = await connection.execute(query);
    return selectedItens;
};

module.exports = {
    getItensForPurchaseOrder,
    getAllItensPurchaseOrder,
};
