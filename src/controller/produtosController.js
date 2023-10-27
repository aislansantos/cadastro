const produtoModel = require("../models/produtoModels");

// referente ao tipo de produtos
const getAllTypeProcuct = async (req, res) => {
    const typesProd = await produtoModel.getAllTypeProcuct();

    return res.status(200).json(typesProd);
};

const createTypeProduct = async (req, res) => {
    const createdTypedProduct = await produtoModel.createTypeProduct(req.body);

    return res
        .status(201)
        .json(`Código tipo cadastrado: ${createdTypedProduct.insertId}`);
};

const deleteTypeProduct = async (req, res) => {
    const { descricao } = req.params;

    await produtoModel.deleteTypeProduct(descricao);
    return res.status(204).json();
};

const updateTypeProduct = async (req, res) => {
    const { id } = req.params;

    await produtoModel.updateTypeProduct(id, req.body);

    return res.status(204).json();
};

//referente ao cadastro geral dos produtos
const getAllProducts = async (_req, res) => {
    const products = await produtoModel.getAllProducts();

    return res.status(200).json(products);
};
const getProduct = async (req, res) => {
    const { descricao } = req.params;
    console.log(descricao);
    const produto = await produtoModel.getProduct(descricao);

    return res.status(200).json(produto);
};
const createProduct = async (req, res) => {
    const createdProduct = await produtoModel.createProduct(req.body);

    return res.status(201).json(createdProduct.insertId);
};

const deleteProduct = async (req, res) => {
    const { descricao } = req.params;

    await produtoModel.deleteProduct(descricao);
    return res.status(400).json();
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    await produtoModel.updateProduct(id, req.body);

    return res.status(204).json();
};
module.exports = {
    //type of products
    getAllTypeProcuct,
    createTypeProduct,
    deleteTypeProduct,
    updateTypeProduct,
    //products
    getAllProducts,
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct,
};
