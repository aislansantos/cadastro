const sellerModel = require("../models/sellerModels");

const getAllSellers = async (req, res) => {
    const sellers = await sellerModel.getAllSellers();
    return res.status(200).json(sellers);
};

const getSeller = async (req, res) => {
    const { nome } = req.params;
    const seller = await sellerModel.getSeller(nome);

    return res.status(200).json(seller);
};

const createSeller = async (req, res) => {
    const createdSeller = await sellerModel.createSeller(req.body);
    return res
        .status(201)
        .json(`Cadastrado vendedor com o ID ${createdSeller.insertId}`);
};

const deleteSeller = async (req, res) => {
    const { nome } = req.params;

    await sellerModel.deleteSeller(nome);
    return res.status(204).json();
};

const updateSeller = async (req, res) => {
    const { id } = req.params;
    await sellerModel.updateSeller(id, req.body);

    return res.status(204).json();
};

module.exports = {
    getAllSellers,
    getSeller,
    createSeller,
    deleteSeller,
    updateSeller,
};
