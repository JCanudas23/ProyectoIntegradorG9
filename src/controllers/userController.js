const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const userController = {

    login : (req,res)=> {
        return res.render ("login");
    },

    register : (req,res) => {
        return res.render ('register');
    },

    userStore : (req,res) => {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let newUser = {
            id: users[users.length - 1].id + 1,
            nombreApellido: req.body.nombreApellido,
            nombreUsuario: req.body.nombreUsuario,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            image: req.file.filename,
        }
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/");
    }
}

module.exports = userController;
