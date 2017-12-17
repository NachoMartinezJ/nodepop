'use strict'

const express = require('express');
const router = express.Router();

const Usuario = require('../../models/Usuario');

/**
 * GET Usuarios
 * Obtenemos una lista de usuarios
 */
router.get('/', async (req, res, next) => {
    try {

        // Para completar la apiv1, falta hacer bien el filtrado
        const name = req.query.nombre;
        const price = req.query.precio;
        const sale = req.query.venta;


        const rows = await Usuario.find().exec();
        res.json({ result: rows });
    } catch (err) {
        next(err);
    }
});

/**
 * GET /usuario:id
 * Obtenemos un usuario
 */
router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const usuario = await Usuario.findOne({ _id }).exec();
        res.json({ result: usuario });
    } catch (err) {
        next(err);
    }
});

/**
 * POST un Usuario
 */
router.post('/', (req, res, next) => {
    const usuario = new Usuario(req.body);

    usuario.save((err, usuarioGuardado) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ result: agenteGuardado });
    });
});




module.exports = router;
