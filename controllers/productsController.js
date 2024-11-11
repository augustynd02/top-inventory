const db = require('../models/queries');

const productsController = {
    getProducts: async (req, res, next) => {
        try {
            const products = await db.getAllProducts();
            const categories = await db.getAllCategories();
            console.log(products);
            console.log(categories);
            products.forEach(product => {
                const id = product.category_id;
                let categoryName = "";
                categories.forEach(category => {
                    if (category.id == id) {
                        categoryName = category.name;
                        return;
                    }
                })
                product["category_name"] = categoryName;
            })
            res.render('pages/products', { products: products, categories: categories });
        } catch(err) {
            next(err);
        }
    },
    addProduct: async (req, res, next) => {
        try {
            if (req.body.quantity == '') {
                req.body.quantity = 0;
            }
            if (req.body.price == '') {
                req.body.price = 0;
            }
            await db.addProduct(req.body)
            res.redirect('/products');
        } catch(err) {
            next(err);
        }
    },
    deleteProduct: async (req, res, next) => {
        try {
            await db.deleteProduct(req.body.name);
            res.redirect('/products');
        } catch(err) {
            next(err);
        }
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
