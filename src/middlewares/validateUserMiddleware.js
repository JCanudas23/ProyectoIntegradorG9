const {body} = require('express-validator');

const validateUser = [
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Ingresa un correo electronico valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
]

module.exports = validateUser;