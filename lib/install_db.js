'use strict';

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');


MongoClient.connect(`mongodb://localhost/cursonode`, async (err, db) => {
    try {
        if (err) {
            process.exit(1);
        }

        let dataBase = await db.dropDatabase();
        dataBase = await JSON.parse(fs.readFileSync(path.join(__dirname, './MOCK_PRODUCT-0.json')));
        dataBase = await db.collection('anuncios').insert(dataBase);
        dataBase = await JSON.parse(fs.readFileSync(path.join(__dirname, './MOCK_USER.json')));
        dataBase = await db.collection('usuarios').insert(dataBase);
    
        db.close();

    } catch (err) {
        console.log('Error starting the database:', err);
    }

});