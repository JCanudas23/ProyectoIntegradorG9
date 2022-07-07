const {body} = require('express-validator');

const validateUser = [
    body('email').notEmpty().withMessage('Email no registrado'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
]

module.exports = validateUser;