'use strict';

/**
 * LOGGING por API
 * Va recibir un usuario y una password
 * y va a devolver un token de autenticación
 */
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Usuario = require('../../models/Usuario');


// post de autenticación: loggin
router.post('/', (req, res, next) => {
    // recogemos las credenciales
    const email = req.body.email;
    const password = req.body.password;

    const usuario = await Usuario.findOne({ _id, email, password }).exec();

    if (email !== usuario.email || password !== usuario.password) {
        res.status = 401;
        res.json({ error: 'Credenciales incorrectas' });
        return;
    }

    const user = { _id: usuario._id };

    
    jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, { 
        expiresIn: process.env.JWT_EXPIRES_IN 
    }, (err, token) => {
        if (err) {
            next(err);
            return;
        }

        // y lo devolvemos
        res.json({ success: true, token: token });
    });

});

module.exports = router;