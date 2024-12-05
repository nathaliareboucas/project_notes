// configurações

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// rotas
app.get('/', function(req, res) {
    res.send('Hello world')
});

app.listen(port, () => {
    console.log(`Projeto rodando na porta: ${port}`)
});
