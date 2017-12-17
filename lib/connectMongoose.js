'use strict';

const mongoose = require('mongoose');
const conn = mongoose.connection;
const pathDB = 'localhost/cursonode';

conn.on('error', err => {
    console.log('Error!', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log(`Conectado a MongoDB en ${mongoose.connection.name}`);
});

mongoose.connect(`mongodb://${pathDB}`, {
    useMongoClient: true
});

module.exports = conn;