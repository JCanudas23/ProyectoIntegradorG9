const path = require('path');
const {body} = require('express-validator');

const validationsCreate = [
    body('name').notEmpty().withMessage('Debes ingresar el nombre del producto').bail().isLength({ min: 5 }).withMessage('Nombre invalido'),
    body('description').notEmpty().withMessage('Debes agregar una descripción del producto').bail().isLength({ min: 20 }).withMessage('La descripción debe contener al menos 20 caráteres'),
    body('stock').notEmpty().withMessage('Debes ingresar el stock del producto'),
    body('price').notEmpty().withMessage('Debes ingresar el precio del producto'),
    body('category').notEmpty().withMessage('Debes elegir la categoria del producto'),
    body('sizes').custom((value, {req})=>{
        let sizes = req.body.size
        if (sizes === undefined){
            throw new Error("Debes agregar las tallas del producto");
        }
        return true;
    }),
    body('image').custom((value, {req})=> {
        let files = req.files 
        let acceptedExtension = [".jpg",".png",".jpeg"];
        if (files.length <= 0){
            throw new Error("Debes subir una imagen del producto");
        } else {
            files.forEach(file => {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtension.includes(fileExtension)) {
                    throw new Error(`las Extensiones de archivo validas son ${acceptedExtension.join(', ')}`)
                }
            });  
        }
        return true;
    })
];

module.exports = validationsCreate;

