const connection = require("./connection");

const getAllCities = async () => {
    const query = "SELECT * FROM cad_cidades";
    const [selectedCities] = await connection.execute(query);

    return selectedCities;
};

const getCity = async (municipio) => {
    const query = "SELECT * FROM cad_cidades WHERE municipio = ?";
    const [selectedCity] = await connection.execute(query, [municipio]);

    return selectedCity;
};

const getCityForId = async (id) => {
    const query = "SELECT id FROM cad_cidades WHERE id = ?";
    const selectedCityForId = await connection.execute(query, [id]);
    return selectedCityForId;
};

const createCity = async (cidade) => {
    const query = "INSERT INTO cad_cidades ( municipio) VALUES (?)";
    const { municipio } = cidade;
    const [createdCity] = await connection.execute(query, [
        municipio.toUpperCase(),
    ]);

    return createdCity;
};

const deleteCity = async (id) => {
    const query = "DELETE FROM cad_cidades WHERE id = ?";
    const removedCity = await connection.execute(query, [id]);

    return removedCity;
};

const updateCity = async (id, cidade) => {
    const query = "UPDATE cad_cidades SET municipio = ? WHERE id = ?";
    const { municipio } = cidade;
    const updatedCity = await connection.execute(query, [municipio, id]);
    return updatedCity;
};

module.exports = {
    getAllCities,
    getCity,
    getCityForId,
    createCity,
    deleteCity,
    updateCity,
};
