const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        /* let folder = path.join(__dirname,'../public/img/users'); */
        cb(null,'public/img/users')
    },
    filename: (req, file, cb) => {
        let img ='user-' + Date.now() + path.extname(file.originalname);  
        cb(null, img)
    }
});

const upload = multer({storage})


const userController = require ( '../controllers/userController');

router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/',upload.single('image') , userController.userStore);

module.exports = router;