'use strict'

const express = require('express');
const router = express.Router();
const Regex = require('regex');

const Anuncio = require('../../models/Anuncio');


// Creamos Regex para filtrar el precio
const included = new RegExp(/[0-9]+-[0-9]+/);
const greaterThan = new RegExp(/[0-9]+-/);
const lesserThan = new RegExp(/-[0-9]+/);

/**
 * GET Anuncios
 * Obtenemos una lista de anuncios
 */
router.get('/', async (req, res, next) => {
    try {

        // Para completar la apiv1, falta hacer bien el filtrado
        const name = req.query.nombre;
        const price = req.query.precio;
        const sale = req.query.venta;
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);
        const sort = req.query.sort;
        const fields = req.query.fields;

        const filter = {};

        if (price.search(included)) {
            let separate = price.split("-");
            let result = [];
            for (let i = 0; i < separate.lenght; i++) {
                result[i] = parseInt(separate[i]);
            }
            console.log(result);
            
            
        } else if (price.search(greaterThan)) {

        } else if (price.search(lesserThan)) {

        }


        const rows = await Anuncio.list(filter, limit, skip, sort, fields);
        res.json({ result: rows });
    } catch(err) {
        next(err);
    }
});

/**
 * GET /anuncios:id
 * Obtenemos un anuncio
 */
router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const anuncio = await Anuncio.findOne({ _id }).exec();
        res.json({ result: anuncio });
    } catch (err) {
        next(err);
    }
});

module.exports = router;