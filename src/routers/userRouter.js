const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {body} = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        /* let folder = path.join(__dirname,'../public/img/users'); */
        cb(null,'public/img/users')
    },
    filename: (req, file, cb) => {
        let img ='user-' + Date.now() + path.extname(file.originalname);  
        cb(null, img)
    }
});

const upload = multer({storage});

const validations = [
    body('nombreApellido').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Ingresa un correo electronico valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('passwordConfirm').notEmpty().withMessage('Confirmar contraseña vacio').custom((value,{req}) =>{
        if(value !== req.body.password){
            throw new Error('La contraseña no coincide')
        }
        return true;
    }),
    body('image').custom((value, {req})=> {
        let file = req.file;
        let acceptedExtension = [".jpg",".png"];
        if (!file){
            throw new Error("Debes subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtension.includes(fileExtension)) {
                throw new Error(`las Extensiones de archivo validas son ${acceptedExtension.join(', ')}`)
            }
        }
        return true;
    })
];


const userController = require ( '../controllers/userController');

router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/register',upload.single('image'), validations , userController.userStore);

module.exports = router;