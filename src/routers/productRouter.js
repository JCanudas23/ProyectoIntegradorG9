const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        /* let folder = path.join(__dirname,'../public/img/products'); */
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

router.get('/create', authMiddleware , productController.createProduct);
router.post('/', upload.single('image') , productController.store);

router.get('/edit/:id', productController.modifyProduct);
router.patch('/edit/:id', upload.single('image'),productController.update);

router.delete('/delete/:id', productController.deleteProduct );

module.exports = router;
