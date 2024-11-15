const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.getCategories);

categoriesRouter.post('/add', categoriesController.addCategory);

categoriesRouter.post('/delete', categoriesController.deleteCategory);

categoriesRouter.post('/edit', categoriesController.editCategory);

module.exports = categoriesRouter;
