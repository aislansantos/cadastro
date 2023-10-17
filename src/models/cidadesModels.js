const connection = require("./connection");

const getAllCities = async () => {
    const query = "SELECT * FROM cidades";

    const [selectedCities] = await connection.execute(query);

    return selectedCities;
};

const getCity = async (municipio) => {
    const query = "SELECT * FROM cidades WHERE municipio = ?";

    const [selectedCity] = await connection.execute(query, [municipio]);
    return selectedCity;
};

const createCity = async (cidade) => {
    de
    const { municipio } = cidade;
    console.log(municipio);

    const query = "INSERT INTO cidades ( municipio) VALUES (?)";

    const [createdCity] = await connection.execute(query, [municipio]);

    return createdCity;
};

module.exports = {
    getAllCities,
    getCity,
    createCity,
};