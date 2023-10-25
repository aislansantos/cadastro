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

// verifica se municipio ja existe para não haver cadastro duplicado
async function validateCityExistForName(req, res, next) {
    const { body } = req;
    const verifyCity = await cidadesModels.getCity(body.municipio);
    if (verifyCity.length > 0) {
        return res.status(400).json({
            message: `Cadastro já existe conferir cadastro ${verifyCity[0].id}`,
        });
    }
    next();
}

module.exports = {
    validateCity,
    validateCityExist,
    validateCityExistForName,
};
