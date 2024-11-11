const db = require('../models/queries');

const productsController = {
    getProducts: async (req, res) => {
        const products = await db.getAllProducts();
        const categories = await db.getAllCategories();
        res.render('pages/products', { products: products, categories: categories });
    },
    addProduct: async (req, res) => {
        await db.addProduct(req.body)
        res.redirect('/products');
    },
    deleteProduct: async (req, res) => {
        await db.deleteProduct(req.body.name);
        res.redirect('/products');
    },
    editProduct: async (req, res, next) => {
        try {
            await db.editProduct(req.body);
            res.redirect('/products')
        } catch(err) {
            next(err);
        }
    }
}

module.exports = productsController;
