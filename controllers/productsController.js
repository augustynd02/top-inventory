const db = require('../models/queries');

const productsController = {
    getProducts: async (req, res) => {
        const products = await db.getAllProducts();
        res.render('pages/products', { products: products });
    },
    addProduct: async (req, res) => {
        await db.addProduct(req.body)
        res.redirect('/products');
    },
    deleteProduct: async (req, res) => {
        await db.deleteProduct(req.body.name);
        res.redirect('/products');
    }
}

module.exports = productsController;
