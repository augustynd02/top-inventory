const db = require('../models/queries');

const productsController = {
    getProducts: async (req, res) => {
        const products = await db.getAllProducts();
        res.render('pages/products', { products: products });
    },
    addProduct: async (req, res) => {
        db.addProduct(req.body)
        res.redirect('/products');
    }
}

module.exports = productsController;
