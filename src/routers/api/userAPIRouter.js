const express = require('express');
const usersAPIController = require('../../controllers/api/usersAPIController');
//CONFIG
const router = express.Router();


//Rutas
//Listado de Usuarios
router.get('/', usersAPIController.usersInDb);
//Detalle de un Usuario
router.get('/:id', usersAPIController.detail);
//Crear Usuario
router.post('/register', usersAPIController.register);
//Editar Producto
router.patch('/edit/:id', usersAPIController.update);

module.exports = router;