const express = require('express');
const router = express.Router();

const indexController = require ( '../controllers/indexController');

router.get('/', indexController.index);
router.get('/politicas', indexController.politicas);

module.exports = router;
