const connection = require("./connection");

const getAll = async () => {
    const [agentes] = await connection.execute("SELECT * FROM cad_agentes");
    return agentes;
};

const getAgente = async (nome) => {
    const query = "SELECT * FROM cad_agentes WHERE nome = ? ";
    const [selectedAgente] = await connection.execute(query, [nome]);
    return selectedAgente;
};

const createAgente = async (agente) => {
    const { nome, email, tipo } = agente;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query =
        "INSERT INTO cad_agentes (nome, email, tipo, created_at) VALUES (?, ?, ?, ?)";

    const [createdAgente] = await connection.execute(query, [
        nome,
        email,
        tipo,
        dateUTC,
    ]);

    return createdAgente;
};

const deleteAgente = async (nome) => {
    const query = "DELETE FROM cad_agentes WHERE nome = ?";

    const removedAgente = await connection.execute(query, [nome]);

    return removedAgente;
};

const updateAgente = async (id, agente) => {
    const query =
        "UPDATE cad_agentes SET nome = ?, email = ?, tipo = ?  WHERE  id = ? ";

    const { nome, email, tipo } = agente;

    const [updatedAgente] = await connection.execute(query, [
        nome,
        email,
        tipo,
        id,
    ]);
    return updatedAgente;
};

module.exports = {
    getAll,
    getAgente,
    createAgente,
    deleteAgente,
    updateAgente,
};
