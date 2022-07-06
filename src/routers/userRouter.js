const express = require('express');
const router = express.Router();

const validations = require('../middlewares/validateRegisterMiddleware');
const upload = require('../middlewares/multerRegisterMiddleware');

const userController = require ( '../controllers/userController');

router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/register',upload.single('image'), validations , userController.userStore);

module.exports = router;