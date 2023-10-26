const sellerModels = require("../models/sellerModels");

const validateDataUpdate = (req, res, next) => {
    const { id } = req.params;
    const { body } = req;

    if (req.params.id == 0) {
        return res
            .status(400)
            .json({ message: "Please check the seller's registration number" });
    }

    if (body.nome === undefined || body.nome === "") {
        return res
            .status(400)
            .json({ message: "Field nome empty or undefined " });
    }

    if (Number.isInteger(body.cidade_id) == false) {
        return res.status(400).json({
            message:
                "Campo digitador no formato errado!, campo com valor numerico esperado",
        });
    }

    next();
};

module.exports = {
    validateDataUpdate,
};
