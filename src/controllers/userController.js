const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const user = require('../models/User');

const usersFilePath = path.join(__dirname, '../data/users.json');


const userController = {

    login : (req,res)=> {
        return res.render ("login");
    },

    register : (req,res) => {
        return res.render ('register');
    },

    loginProcess: (req,res) => {
        let userToLogin = user.findByField('email',req.body.email);
        if (userToLogin) {
            let passwordOk = bcryptjs.compareSync(req.body.password,userToLogin.password)
            if (passwordOk) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                res.redirect("/user/profile")
            }
            res.render('login', {
                errors: {
                    email: {
                        msg:"Las credenciales son invalidas"
                    }
                }
            });    
        }
        res.render('login', {
            errors: {
                email: {
                    msg:"Email no registrado"
                }
            }
        });
    },

    profile: (req,res) => {
        return res.render ("profile" , {
            user: req.session.userLogged
        });
    },

    logout: (req,res) => {
        req.session.destroy();
        res.redirect('/');
    },

    userStore : (req,res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0 ){
            let filename = req.file.filename;
            let ruta = 'public/img/users/';
            fs.unlink(ruta + filename, deleteFileCallback);
            function deleteFileCallback(error){
                if (error) {
                    console.log('No se pudo borrar')
                } else {
                    console.log('borrado ' + filename);
                }
            }
            return res.render ('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDb = user.findByField('email',req.body.email);
        if (userInDb){
            let filename = req.file.filename;
            let ruta = 'public/img/users/';
            fs.unlink(ruta + filename, deleteFileCallback);
            function deleteFileCallback(error){
                if (error) {
                    console.log('No se pudo borrar')
                } else {
                    console.log('borrado ' + filename);
                }
            }
            return res.render ('register', {
                errors: {
                    email:{
                        msg:'Este email ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        }


        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file.filename,
        }

        user.create(userToCreate);

        res.redirect("/");
    } 
}

module.exports = userController;
