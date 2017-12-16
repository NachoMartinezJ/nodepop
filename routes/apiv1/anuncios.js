'use strict'

const express = require('express');
const router = express.Router();

const Anuncio = require('../../models/Anuncio');

/**
 * GET Anuncios
 * Obtenemos una lista de anuncios
 */

 /**
  * POST Anuncio
  * creamos un nuevo anuncio
  */
  router.post('/', (req, res, next) => {
    const anuncio = new Anuncio(req.body);

    anuncio.save((err, anuncioGuardado) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ result: anuncioGuardado});
    });
  });

  module.exports = router;