const {MongoClient} = require('mongodb');
const url = "mongodb://0.0.0.0:27017/notesDb";

let _db = new MongoClient(url);

const initDb = cb => {
    MongoClient.connect(url)
        .then(client => {
            _db = client
            cb(null, _db)
        })
        .catch(err => {
            cb(err)
        })
}

const getDb = () => {
    return _db;
}

module.exports = {
    initDb,
    getDb
}