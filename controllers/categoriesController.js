const categoriesController = {
    getCategories: (req, res) => {
        res.render('categories');
    }
}

modules.export = categoriesController;
