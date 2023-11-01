const connection = require("./connection");

const getItensForPurchaseOrder = async (idPurchase) => {
    const query =
        "SELECT ITP.pedido_compra_id, PC.numero_pedido, CP.descricao, ITP.qtde, ITP.vlr_unt, (ITP.vlr_unt * ITP.qtde) AS total FROM itens_pedidos_compra AS ITP INNER JOIN cad_products AS CP ON ITP.produto_id = CP.id_product INNER JOIN pedido_compra as PC ON ITP.pedido_compra_id = PC.`Id_compra` WHERE PC.`Id_compra` =  ?";

    const [selectedItens] = await connection.execute(query, [idPurchase]);
    return selectedItens;
};

module.exports = {
    getItensForPurchaseOrder,
};
