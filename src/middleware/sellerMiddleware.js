const sellerModels = require("../models/sellerModels");

const validateDataUpdate = (req, res, next) => {
    const { id } = req.params;
    const { body } = req;

    next();
};

module.exports = {
    validateDataUpdate,
};
