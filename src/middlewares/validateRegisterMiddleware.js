const path = require('path');
const {body} = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debes escribir un nombre').bail().isLength({ min: 3 }).withMessage('Debes escribir un nombre valido'),
    body('user_name').notEmpty().withMessage('Debes ingresar un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes ingresar un correo electronico').bail().isEmail().withMessage('Ingresa un correo electronico valido'),
    body('password', 'Debes ingresar una contraseña, deberá contener al menos 8 carácteres, una Mayúscula, un numero y un carácter especial').not().isIn(['123', 'password', 'contraseña']).withMessage('Nivel de seguridad bajo').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    body('passwordConfirm').notEmpty().withMessage('Debes confirmar la contraseña').custom((value,{req}) =>{
        if(value !== req.body.password){
            throw new Error('La contraseña no coincide')
        }
        return true;
    }),
    body('avatar').custom((value, {req})=> {
        if (req.file != undefined) {
            let file = req.file;
            let acceptedExtension = [".jpg",".png",".jpeg"];
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