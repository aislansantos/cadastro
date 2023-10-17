const cidadesModels = require("../models/cidadesModels");

const getAllCities = async (req, res) => {
    const municipios = await cidadesModels.getAllCities();
    return res.status(200).json(municipios);
};

const getCity = async (req, res) => {
    const { municipio } = req.params;
    const cidade = await cidadesModels.getCity(municipio);

    return res.status(200).json(cidade);
};

const createCity = async (req, res) => {
    const createdMunicipio = await cidadesModels.createCity(req.body);

    return res.status(201).json(createdMunicipio);
};

module.exports = {
    getAllCities,
    getCity,
    createCity,
};