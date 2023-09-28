const connection = require("./connection");

const getAll = async () => {
    const [agentes] = await connection.execute("SELECT * FROM cad_agentes");
    return agentes;
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

module.exports = {
    getAll,
    createAgente,
};
