function validateCity(req, res, next) {
    const { body } = req;

    if (body.municipio === undefined || body.municipio === "") {
        return res.status(400).json({
            message: "Field municipio undefined or empty, check please",
        });
    }

    console.log(body);

    next();
}

module.exports = {
    validateCity,
};