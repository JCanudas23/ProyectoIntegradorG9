const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();

const productController = require ( '../controllers/productController');

router.get('/', productController.index);

router.get('/detail/:id', productController.detail);

router.get('/productCart', productController.productCart);

router.get('/productCreate', productController.createProduct);

router.get('/productEdit', productController.modifyProduct);

module.exports = router;
