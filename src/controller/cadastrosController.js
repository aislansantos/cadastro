const cadastroModel = require("../models/cadastroModels");

const getAll = async (_req, res) => {
    const agentes = await cadastroModel.getAll();

    return res.status(200).json(agentes);
};

const createAgente = async (req, res) => {
    const createdAgente = await cadastroModel.createAgente(req.body);

    return res.status(201).json(req.body);
};

module.exports = {
    getAll,
    createAgente,
};
