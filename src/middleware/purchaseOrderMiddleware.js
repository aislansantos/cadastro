const validateData = (req, res, next) => {
    const { body } = req;

    if (
        body.numero_pedido === "" ||
        body.ID_agente === "" ||
        body.numero_pedido === undefined ||
        body.ID_agente === undefined
    ) {
        return res.status(400).json({
            message:
                "os campos de numero do pedido e numero do agente devem ser preenchidos!",
        });
    }
    if (Number.isInteger(body.numero_pedido) == false) {
        return res.status(400).json("Campo digitador no formato errado!, campo com valor numerico esperado");
    }

    console.log(body);
    next();
};

module.exports = {
    validateData,
};
