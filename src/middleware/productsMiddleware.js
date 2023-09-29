const validateTypeBody = (req, res, next) => {
    const { body } = req;

    if (body.descricao === undefined || body.descricao === "") {
        return res.status(400).json({
            message: "Field description empty or undefined, check please",
        });
    }

    next();
};

const validateProductBody = (req, res, next) => {
    const { body } = req;

    if (
        body.descricao === undefined ||
        body.codigo_type_product === undefined
    ) {
        return res.status(400).json({
            mesage: "Field description and cod_type_product are require",
        });
    }
    if (body.descricao === "" || body.codigo_type_product === "") {
        return res.status(400).json({
            mesage: "Field description and cod_type_product cannot be empty",
        });
    }

    next();
};

module.exports = {
    validateTypeBody,
    validateProductBody,
};
