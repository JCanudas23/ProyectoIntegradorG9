const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');

const userController = {

    login : (req,res)=> {
        return res.render ("login");
    },

    register : (req,res) => {
        return res.render ('register');
    },

    userStore : (req,res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0 ){
            return res.render ('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let newUser = {
            id: users[users.length - 1].id + 1,
            nombreApellido: req.body.nombreApellido,
            nombreUsuario: req.body.nombreUsuario,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            passwordConfirm: req.body.passwordConfirm,
            image: req.file.filename,
        }
        delete newUser.passwordConfirm;
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/");
    } 
}

module.exports = userController;
