const { Router } = require('express');
const productsController = require('../controllers/productsController');
const productsRouter = Router();

productsRouter.get('/', productsController.getProducts);

productsRouter.post('/add', productsController.addProduct);

productsRouter.post('/delete', productsController.deleteProduct);

module.exports = productsRouter;
