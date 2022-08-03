const {body} = require('express-validator');

const validateUser = [
    body('email').notEmpty().withMessage('Debes ingresar un Email valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
]

module.exports = validateUser;