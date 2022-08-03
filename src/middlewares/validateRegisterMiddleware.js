const path = require('path');
const {body} = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('user_name').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Ingresa un correo electronico valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('passwordConfirm').notEmpty().withMessage('Confirmar contraseña vacio').custom((value,{req}) =>{
        if(value !== req.body.password){
            throw new Error('La contraseña no coincide')
        }
        return true;
    }),
    body('avatar').custom((value, {req})=> {
        if (req.file != undefined) {
            let file = req.file;
            let acceptedExtension = [".jpg",".png"];
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtension.includes(fileExtension)){
                throw new Error(`las Extensiones de archivo validas son ${acceptedExtension.join(', ')}`)
            }
            return true;       
        }
        return true; 
    })
];

module.exports = validations;