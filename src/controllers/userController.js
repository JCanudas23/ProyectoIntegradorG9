const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const { Op } = require("sequelize");

const userController = {

    login : (req,res)=> {
        return res.render ("login");
    },

    register : (req,res) => {
        return res.render ('register');
    },

    loginProcess: (req,res) => {
        const resultValidation = validationResult(req,res);
        
        db.User.findAll({
            where: { email: req.body.email }
        })
        .then ((result)=>{
            let userToLogin = result[0]
            if (resultValidation.errors.length > 1 ){
                res.render ('login', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })
            } else if (result.length == 0){
                res.render('login', {
                    errors: {
                        email: {
                            msg:"El correo no se encuentra registrado"
                        }
                    }
                })
            } else if (result.length > 0 ){
                let passwordOk = bcryptjs.compareSync(req.body.password,userToLogin.password)
                if (passwordOk) {
                    delete userToLogin.dataValues.password;
                    req.session.userLogged = userToLogin;

                    if (req.body.remember_user){
                        res.cookie('userEmail',req.body.email, {maxAge: 1000 * 1000})
                    }

                    res.redirect("/user/profile")
                }
                res.render('login', {
                    errors: {
                        password: {
                            msg:"La Contraseña es incorrecta"
                        }
                    }
                }); 
            }
        })
        .catch( error =>
            res.send(error)
          )
    },

    profile: (req,res) => {
        console.log(req.cookies.userEmail);
        return res.render ("profile" , {
            user: req.session.userLogged
        });
    },

    logout: (req,res) => {
        req.session.destroy();
        res.redirect('login');
    },

    userStore : (req,res) => {

        const resultValidation = validationResult(req);

        db.User.findAll({
            where: { 
                [Op.or]: [{ email: req.body.email }, { user_name: req.body.user_name}],
                }
        })
        .then((result) => {
            if (resultValidation.errors.length > 0 ){
                if (req.file != undefined) {
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
                }
                return res.render ('register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            } else if (result.length > 0 ? result[0].dataValues.email == req.body.email : null){
                if (req.file != undefined) {
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
                }
                return res.render ('register', {
                    errors: {
                        email: {
                            msg: "Email ya se encuentra registrado"
                        }
                    },
                    oldData: req.body
                })
            } else if (result.length > 0 ? result[0].dataValues.user_name == req.body.user_name : null){
                if (req.file != undefined) {
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
                }
                return res.render ('register', {
                    errors: {
                        user_name: {
                            msg: "Nickname ya se encuentra registrado"
                        }
                    },
                    oldData: req.body
                })
            } else {
                db.User.create ({
                    name: req.body.name,
                    user_name: req.body.user_name,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    avatar: req.file ? req.file.filename : 'user-1657151406387.png',
                    deleted : 0,
                    role_id: 2,
                })
                res.redirect("login");
            }
        })
        .catch( error =>
            res.send(error)
          )
    },

    modifyUser : (req,res) => {
        let id = req.session.userLogged.id;
        db.User.findByPk (id)
          .then((user) => {
            res.render ('editP', {user})
          })
          .catch( error =>
            res.send(error)
          )
    },

    updateUser: (req, res) => {
        let idUser = req.session.userLogged.id;
        db.User.update(
          {
            name: req.body.name,
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password ? bcryptjs.hashSync(req.body.password, 10): req.session.userLogged.password ,
            avatar: req.file ? req.file.filename : req.session.userLogged.avatar,
          },
          {
            where: { id: idUser},
          }
        )
        .then (()=> {
            db.User.findByPk(idUser)
            .then((data)=>{
                let userToLogin = data;
                delete userToLogin.dataValues.password;
                req.session.userLogged = userToLogin;
                res.redirect("/user/profile")
            })
        })
    }
}

module.exports = userController;
