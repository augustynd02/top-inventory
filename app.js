const path = require('node:path');
const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const categoriesRouter = require('./routes/categoriesRouter');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);

app.get('/', (req, res) => res.send('works'));

app.use((req, res, next) => {
  res.status(404);
  const error = new Error("Not found");
  error.status = 404;
  next(error)
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);
    res.render('pages/error', {
        status: err.status || 500,
        message: err.message
    })
  });


app.listen(PORT, () => console.log('Listening on port ' + PORT))
