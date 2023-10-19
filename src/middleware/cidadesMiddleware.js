const cidadesModels = require("../models/cidadesModels");

function validateCity(req, res, next) {
    const { body } = req;

    if (body.municipio === undefined || body.municipio === "") {
        return res.status(400).json({
            message: "Field municipio undefined or empty, check please",
        });
    }

    next();
}

async function validateCityExist(req, res, next) {
    const { id } = req.params;
    const verifyCity = await cidadesModels.getCityForId(id);
    if (verifyCity[0].length === 0) {
        return res.status(400).json({
            message: `Registro ${id} não encontrato`,
        });
    }
    next();
}

module.exports = {
    validateCity,
    validateCityExist,
};
