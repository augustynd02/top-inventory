const productsController = {
    getProducts: (req, res) => {
        res.render('products');
    }
}

modules.export = productsController;
