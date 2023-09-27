const connection = require("./connection");

const getAll = async () => {
    const [cadastros] = await connection.execute("SELECT * FROM cad_agentes");
    return cadastros;
};

module.exports = {
    getAll,
};
