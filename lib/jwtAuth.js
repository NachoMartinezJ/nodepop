'use strict';

const jwt = require('jsonwebtoken');

// exportamos un creador de middleware de autenticación
module.exports = () => {
    return function (req, res, next) {
        // leemos credenciales
        const token = req.body.token || req.query.token || req.get('x-access-token');

        if (!token) {
            const err = new Error('No token provided');
            err.status = 401;
            next(err);
            return;
        }

        // comprobamos credenciales
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('Token error:', err);
                const error = new Error('Invalid token');
                error.status = 401;
                next(error);
                return;
            }

            req.userId = decoded.user_id;
            next();
        });
    }
}
