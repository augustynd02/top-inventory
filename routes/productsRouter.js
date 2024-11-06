const { Router } = require('express');
const productsController = require('../controllers/productsController');
const productsRouter = new Router();

productsRouter.get('/', productsController.getProducts);

module.exports = productsRouter;