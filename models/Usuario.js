'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const usuarioSchema = mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowecase: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
});

/**
 * Usamos pre, para modificar el parámetro antes de que haya sido introducido en la base de datos
 * con la finalidad de encriptar la contraseña antes de guardarla
 */
usuarioSchema.pre('save', (next) => {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                next(err);
            }
            user.password = hash;
            next();
        });
    });
})

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
