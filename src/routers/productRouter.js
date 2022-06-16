const express = require('express');
const router = express.Router();

const productController = require ( '../controllers/productController');

router.get('/productDetail/:id', productController.productDetail);

router.get('/productCart', productController.productCart);

router.get('/listaDeProducto', productController.listaDeProducto);
module.exports = router;
