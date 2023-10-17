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
    const query = "INSERT INTO cidades ( municipio) VALUES (?)";
    const { municipio } = cidade;
    const [createdCity] = await connection.execute(query, [municipio]);

    return createdCity;
};

const deleteCity = async (id) => {
    const query = "DELETE FROM cidades WHERE id = ?";
    const removedCity = await connection.execute(query, [id]);

    return removedCity;
};

const updateCity = async (id, cidade) => {
    const query = "UPDATE cidades SET municipio = ? WHERE id = ?";
    const { municipio } = cidade;
    const updatedCity = await connection.execute(query, [municipio, id]);
    return updatedCity;
};

module.exports = {
    getAllCities,
    getCity,
    createCity,
    deleteCity,
    updateCity,
};
