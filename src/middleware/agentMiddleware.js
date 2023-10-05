const validateBody = (req, res, next) => {
    const { body } = req;

    if (
        body.nome === undefined ||
        body.email === undefined ||
        body.tipo === undefined
    ) {
        return res.status(400).json({
            message: "the fields nome, email, tipo are required",
        });
    }
    if (body.nome === "" || body.email === "" || body.tipo === "") {
        return res.status(400).json({
            message: "nome, email, tipo cannot be empty",
        });
    }

    next();
};

const validateGet = (req, res, next) => {
    const { nome } = req.params;

    console.log(nome);

    next();
};

module.exports = {
    validateBody,
    validateGet,
};
