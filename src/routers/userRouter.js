const express = require('express');
const router = express.Router();

const validations = require('../middlewares/validateRegisterMiddleware');
const validateUser = require('../middlewares/validateUserMiddleware');
const upload = require('../middlewares/multerRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const userController = require ( '../controllers/userController');

router.get('/login', guestMiddleware, adminMiddleware ,userController.login);
router.post('/login', validateUser , userController.loginProcess);

router.get ('/profile/', authMiddleware ,userController.profile);
router.get ('/logout/',userController.logout);

router.get('/register', guestMiddleware, adminMiddleware ,userController.register);
router.post('/register',upload.single('avatar'), validations , userController.userStore);

module.exports = router;