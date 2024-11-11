const db = require('../models/queries');

const categoriesController = {
    getCategories: async (req, res) => {
        const categories = await db.getAllCategories();
        res.render('pages/categories', { categories: categories});
    },
    addCategory: async (req, res) => {
        await db.addCategory(req.body);
        res.redirect('/categories');
    }
}

module.exports = categoriesController;
