const cadastroModel = require("../models/cadastroModels");

const getAll = async (req, res) => {

    const cadastros = await cadastroModel.getAll();

    return res.status(200).json({cadastros});
};

module.exports = {
    getAll,
};
