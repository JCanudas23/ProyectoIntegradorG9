const express = require('express');
const usersAPIController = require('../../controllers/api/usersAPIController');
//CONFIG
const router = express.Router();


//Rutas
//Listado de Usuarios
router.get('/', usersAPIController.usersInDb);

//Detalle de un Usuario
router.get('/:id', usersAPIController.detail);

//Login de usuario
router.post('/login', usersAPIController.loginProcess);

//Crear Usuario
router.post('/register', usersAPIController.register);

//Editar Producto
router.patch('/edit/:id', usersAPIController.update);

//Editar Producto
router.delete('/destroy/:id', usersAPIController.destroy);

module.exports = router;