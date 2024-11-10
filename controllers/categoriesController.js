const db = require('../models/queries');

const categoriesController = {
    getCategories: async (req, res) => {
        const categories = await db.getAllCategories();
        res.render('pages/categories', { categories: categories});
    }
}

module.exports = categoriesController;
