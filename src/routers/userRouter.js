const express = require('express');
const router = express.Router();

const validations = require('../middlewares/validateRegisterMiddleware');
const validateUser = require('../middlewares/validateUserMiddleware');
const upload = require('../middlewares/multerRegisterMiddleware');

const userController = require ( '../controllers/userController');

router.get('/login', userController.login);
/* router.post('/login', validateUser ,userController.); */

router.get('/register', userController.register);
router.post('/register',upload.single('image'), validations , userController.userStore);

module.exports = router;