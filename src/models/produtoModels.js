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
    const query = "SELECT * FROM cad_products";

    const [products] = await connection.execute(query);

    return products;
};

const getProduct = async (descricao) => {
    const query = "SELECT * FROM cad_products WHERE descricao = ?";
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

module.exports = {
    getAllTypeProcuct,
    createTypeProduct,
    deleteTypeProduct,
    updateTypeProduct,
    getAllProducts,
    getProduct,
    createProduct,
};
