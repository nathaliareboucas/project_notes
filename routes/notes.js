const Router = require('express').Router;
const db = require('../db/connection');
const { ObjectId } = require('mongodb');

const router = Router();

// form de criação de nota
router.get('/', function(req, res) {
    res.render('notes/create');
})

// adição de nota
router.post('/', function(req, res) {
    const note = req.body;
    db.getDb()
        .db()
        .collection('notes')
        .insertOne(note)

    res.redirect(301, '/');
})

// remoção de nota
router.post('/delete', function(req, res) {
    const data = req.body;
    const noteId = ObjectId.createFromHexString(data.id);
    db.getDb()
        .db()
        .collection('notes')
        .deleteOne({_id: noteId})
    
    res.redirect(301, '/')
})

module.exports = router;