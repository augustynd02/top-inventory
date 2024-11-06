const path = require('node:path');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'))

app.get('/', (req, res) => res.send('works'));

app.listen(PORT, () => console.log('Listening on port ' + PORT))
