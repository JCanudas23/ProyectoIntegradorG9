const express = require('express');
const productsAPIController = require('../../controllers/api/productsAPIController');
//CONFIG
const router = express.Router();


//Rutas
//Listado de productos
router.get('/', productsAPIController.productsInDb);
//Detalle de un producto
router.get('/:id', productsAPIController.detail);

module.exports = router;