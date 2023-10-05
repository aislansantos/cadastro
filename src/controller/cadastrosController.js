const cadastroModel = require("../models/cadastroModels");

const getAll = async (_req, res) => {
    const agentes = await cadastroModel.getAll();
    return res.status(200).json(agentes);
};

const getAgente = async (req, res) => {
    const { nome } = req.params;

    const agente = await cadastroModel.getAgente(nome);

    return res.status(200).json(agente);
};

const createAgente = async (req, res) => {
    const createdAgente = await cadastroModel.createAgente(req.body);

    return res.status(201).json(`Id cadastrado: ${createdAgente.insertId}`);
};

const deleteAgente = async (req, res) => {
    const { nome } = req.params;

    await cadastroModel.deleteAgente(nome);
    return res.status(204).json();
};

const updateAgente = async (req, res) => {
    const { id } = req.params;
    await cadastroModel.updateAgente(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    getAgente,
    createAgente,
    deleteAgente,
    updateAgente,
};
