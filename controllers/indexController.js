const indexController = {
    getIndex: (req, res) => {
        res.render('index');
    }
}

modules.export = indexController;
