// configurações
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// importação de rotas
const notesRoutes = require('./routes/notes');

// rotas
app.get('/', function(req, res) {
    res.render('home');
});

app.use('/notes', notesRoutes);

app.listen(port, () => {
    console.log(`Projeto rodando na porta: ${port}`)
});
