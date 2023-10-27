const connection = require("./connection");

const getAllTypeProcuct = async () => {
    const query = "SELECT * FROM cad_prod_tipo";

    const [typeProd] = await connection.execute(query);
    return typeProd;
};

const createTypeProduct = async (typeProduct) => {
    const { descricao } = typeProduct;

    const query = "INSERT INTO cad_prod_tipo (descricao) VALUES (?)";

    const [createdTypedProduct] = await connection.execute(query, [descricao]);

    return createdTypedProduct;
};

const deleteTypeProduct = async (descricao) => {
    const query = "DELETE FROM cad_prod_tipo WHERE descricao = ? ";

    const removedTypeProduct = await connection.execute(query, [descricao]);

    return removedTypeProduct;
};

const updateTypeProduct = async (id, typeProduct) => {
    const query = "UPDATE cad_prod_tipo SET descricao = ? WHERE  id = ?";

    const { descricao } = typeProduct;

    const [updatedTypeProduct] = await connection.execute(query, [
        descricao,
        id,
    ]);

    return updatedTypeProduct;
};

const getAllProducts = async () => {
    //const query = "SELECT * FROM cad_products";
    const query =
        "SELECT id_product, descricao, estoque, descricao_type_product FROM cad_products AS prod INNER JOIN cad_prod_tipo AS type_prod ON prod.codigo_type_product = type_prod.id_type_product";

    const [products] = await connection.execute(query);

    return products;
};

const getProduct = async (descricao) => {
    //const query = "SELECT * FROM cad_products WHERE descricao = ?";
    const query =
        "SELECT id_product, descricao, estoque, descricao_type_product FROM cad_products AS prod INNER JOIN cad_prod_tipo AS type_prod ON prod.codigo_type_product = type_prod.id_type_product WHERE descricao = ?";

    const [selectedProduto] = await connection.execute(query, [descricao]);
    return selectedProduto;
};

const createProduct = async (product) => {
    const { descricao, codigo_type_product } = product;

    const query =
        "INSERT INTO cad_products (descricao, estoque, codigo_type_product) VALUES (?, 0, ?)";

    const [createdProduct] = await connection.execute(query, [
        descricao,
        codigo_type_product,
    ]);

    return createdProduct;
};

const deleteProduct = async (descricao) => {
    const query = "DELETE FROM cad_products WHERE descricao = ?";

    const removedProduct = await connection.execute(query, [descricao]);

    return removedProduct;
};

const updateProduct = async (id, product) => {
    const query =
        "UPDATE cad_products SET descricao = ?,codigo_type_product = ? WHERE id_product  = ?";
    const { descricao, codigo_type_product } = product;

    const [updatedProduct] = await connection.execute(query, [
        descricao,
        codigo_type_product,
        id,
    ]);

    return updatedProduct;
};

module.exports = {
    getAllTypeProcuct,
    createTypeProduct,
    deleteTypeProduct,
    updateTypeProduct,
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
};
