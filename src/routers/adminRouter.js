const express = require('express');
const router = express.Router();

const adminController = require ( '../controllers/adminController');

router.get('/adminCreate', adminController.createProduct);

router.get('/adminModify', adminController.modifyProduct);

module.exports = router;
