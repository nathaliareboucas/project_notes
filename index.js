// configurações
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 8000;

// db
const db = require('./db/connection');

// template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());  

// importação de rotas
const notesRoutes = require('./routes/notes');

// rotas
app.get('/', async function(req, res) {
    const notes = await db.getDb().db().collection('notes').find({}).toArray();
    res.render('home', {notes});   
})

app.use('/notes', notesRoutes);

db.initDb((err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log('O banco conectou com sucesso');
        app.listen(port, () => {
            console.log(`Projeto rodando na porta: ${port}`)
        });
    }
})
