const connection = require("./connection");

const getAllTypeProcuct = async () => {
    const query = "SELECT * FROM prod_tipo";

    const [typeProd] = await connection.execute(query);
    return typeProd;
};

const createTypeProduct = async (typeProduct) => {
    const { descricao } = typeProduct;

    const query = "INSERT INTO prod_tipo (descricao) VALUES (?)";

    const [createdTypedProduct] = await connection.execute(query, [descricao]);

    return createdTypedProduct;
};

const deleteTypeProduct = async (descricao) => {
    const query = "DELETE FROM prod_tipo WHERE descricao = ? ";

    const removedTypeProduct = await connection.execute(query, [descricao]);

    return removedTypeProduct;
};

const updateTypeProduct = async (id, typeProduct) => {
    const query = "UPDATE prod_tipo SET descricao = ? WHERE  id = ?";

    const { descricao } = typeProduct;

    const [updatedTypeProduct] = await connection.execute(query, [
        descricao,
        id,
    ]);

    return updatedTypeProduct;
};

const getAllProducts = async () => {
    const query = "SELECT * FROM products_cad";


    const [products] = await connection.execute(query);

    return products;
};

const createProduct = async (product) => {
    const { descricao, codigo_type_product } = product;

    const query =
        "INSERT INTO products_cad (descricao, estoque, codigo_type_product) VALUES (?, 0, ?)";

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
    createProduct,
};