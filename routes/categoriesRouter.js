const { Router } = require('express');
const categoriesController = require('../controllers/productsController');
const categoriesRouter = new Router();

categoriesRouter.get('/', categoriesController.getCategories);

module.exports = categoriesRouter;
