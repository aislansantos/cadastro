const connection = require("./connection");

const getAllSellers = async () => {
    const query =
        "SELECT id, nome,cidade_id, municipio FROM vendedores INNER JOIN cidades ON vendedores.cidade_id = cidades.id";
    const [sellers] = await connection.execute(query);
    return sellers;
};

const getSeller = async (nome) => {
    const query =
        "SELECT nome, cidade_id,  municipio FROM vendedores INNER JOIN cidades ON vendedores.cidade_id = cidades.id WHERE nome = ?";
    const [selectedSeller] = await connection.execute(query, [nome]);
    return selectedSeller;
};

const createSeller = async (seller) => {
    const { nome, cidade_id } = seller;
    const query = "INSERT INTO vendedores (nome, cidade_id) VALUES (?,?)";

    const [createdSeller] = await connection.execute(query, [nome, cidade_id]);

    return createdSeller;
};

const deleteSeller = async (nome) => {
    const query = "DELETE FROM vendedores WHERE  nome = ?";
    const removedSeller = await connection.execute(query, [nome]);

    return removedSeller;
};

const updateSeller = async (id, seller) => {
    const query =
        "UPDATE vendedores SET nome = ?, cidade_id = ? WHERE id_vendedores = ?";
    const { nome, cidade_id } = seller;

    const [updatedSeller] = await connection.execute(query, [
        nome,
        cidade_id,
        id,
    ]);
    return updatedSeller;
};

module.exports = {
    getAllSellers,
    getSeller,
    createSeller,
    deleteSeller,
    updateSeller,
};
