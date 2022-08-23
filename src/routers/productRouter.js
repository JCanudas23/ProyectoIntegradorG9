const express = require('express');
const router = express.Router();
const multer = require('multer'); // Llamado a multer para perimitir al usuario subir archivos (images)
const validationsCreate = require('../middlewares/validateCreateProductMiddleware'); // Validaciónes en la ruta de creación de producto
const validationsEdit = require('../middlewares/validateEditProductMiddleware'); // Validaciónes en la ruta de edición de producto
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware'); // Ruta usuario NO Logueado
const guestMiddleware = require('../middlewares/guestMiddleware'); // Ruta usuario Logueado con ROL de cliente

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/img/products')
    },
    filename: (req, file, cb) => {
        let img ='product-' + Date.now() + path.extname(file.originalname);  
        cb(null, img)
    }
});

const upload = multer({storage})

const productController = require ( '../controllers/productController');

router.get('/', productController.index);

router.get('/detail/:id', productController.detail);

router.get('/productCart', productController.productCart);

router.get('/create', authMiddleware , guestMiddleware , productController.createProduct);
router.post('/', upload.array('image', 4), validationsCreate, productController.store);

router.get('/edit/:id', authMiddleware , guestMiddleware , productController.modifyProduct);
router.patch('/edit/:id', upload.array('image', 4), validationsEdit ,productController.update);

router.patch('/delete/:id', productController.deleteProduct );

module.exports = router;
