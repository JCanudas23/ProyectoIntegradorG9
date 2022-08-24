const express = require('express');
const usersAPIController = require('../../controllers/api/usersAPIController');
//CONFIG
const router = express.Router();


//Rutas
//Listado de productos
router.get('/', usersAPIController.usersInDb);
//Detalle de un producto
router.get('/:id', usersAPIController.detail);
//Crear Producto
router.post('/create', usersAPIController.register);

module.exports = router;