'use strict';

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const pathBD = 'mongodb://localhost/cursonode';
const pathAnuncios = path.join(__dirname, './MOCK_PRODUCT-0.json');
const pathUsuarios = path.join(__dirname, './MOCK_USER.json');
const collections = ['anuncios', 'usuarios'];


MongoClient.connect(pathBD, async (err, db) => {
    try {
        if (err) {
            process.exit(1);
        }

        let dataBase = await db.dropDatabase();
        dataBase = await JSON.parse(fs.readFileSync(pathAnuncios));
        dataBase = await db.collection(collections[0]).insert(dataBase);
        dataBase = await JSON.parse(fs.readFileSync(pathUsuarios));
        dataBase = await db.collection(collections[1]).insert(dataBase);
    
        db.close();

    } catch (err) {
        console.log('Error starting the database:', err);
    }

});