const express = require('express');
const router = express.Router();

const indexController = require ( '../controllers/indexController');

router.get('/', indexController.index);
router.get('/politicas', indexController.politicas);
router.get('/condicionesCompra', indexController.condiciones);

module.exports = router;
