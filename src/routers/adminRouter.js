const express = require('express');
const router = express.Router();

const adminController = require ( '../controllers/adminController');

router.get('/product-Create', adminController.createProduct);

router.get('/product-Edit', adminController.modifyProduct);

module.exports = router;

