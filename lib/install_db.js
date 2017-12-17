'use strict';

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Variables que settear para configurar DB propia
const pathDB = 'mongodb://localhost/cursonode';
const pathAnuncios = path.join(__dirname, './MOCK_PRODUCT-0.json');
const pathUsuarios = path.join(__dirname, './MOCK_USER.json');
const collections = ['anuncios', 'usuarios'];


MongoClient.connect(pathDB, async (err, db) => {
    try {
        if (err) {
            process.exit(1);
        }

        let data = await db.dropDatabase();
        data = await JSON.parse(fs.readFileSync(pathAnuncios));
        data = await db.collection(collections[0]).insert(data);
        data = await JSON.parse(fs.readFileSync(pathUsuarios));
        data = await db.collection(collections[1]).insert(data);
    
        db.close();

    } catch (err) {
        console.log('Error starting the database:', err);
    }

});