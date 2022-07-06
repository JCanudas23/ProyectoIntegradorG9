const path = require('path');
const multer = require('multer');

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

const upload = multer({storage});

module.exports = upload;