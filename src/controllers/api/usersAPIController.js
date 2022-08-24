const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const bcryptjs = require("bcryptjs");
const { Op } = require("sequelize");

const usersAPIController = {
  usersInDb: (req, res) => {
    db.User.findAll({ where: { deleted: 0 } })
      .then((users) => {
        let dataUsers = users.map((user) => {
          return user.dataValues;
        });

        //Eliminamos información sensible de cada usuario
        dataUsers.forEach((user) => {
          delete user.password;
          delete user.avatar;
          delete user.deleted;
          delete user.role_id;
          user.detailURL = "http://localhost:3030/api/users/" + user.id;
        });

        let respuesta = {
          meta: {
            status: 200,
            total: users.length,
            url: "http://localhost:3030/api/users",
          },
          users: dataUsers,
        };
        res.status(200).json(respuesta);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  detail: (req, res) => {
    let id = req.params.id;
    db.User.findByPk(id, { where: { deleted: 0 } })
      .then((user) => {
        let dataUser = user.dataValues;

        //Eliminamos información sensible
        delete dataUser.password;
        delete dataUser.deleted;
        delete dataUser.role_id;

        //Agregamos Ruta Imagen de perfil
        dataUser.avatar = "/public/img/users/" + dataUser.avatar;

        let respuesta = {
          meta: {
            status: 200,
            url: "http://localhost:3030/api/users/" + user.dataValues.id,
          },
          user: dataUser,
        };
        res.status(200).json(respuesta);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  register: (req, res) => {
    // Buscamos en la base datos para no crear dos usuarioa con el mismo Email o User Name
    db.User.findAll({
      where: {
        [Op.or]: [{ email: req.body.email }, { user_name: req.body.user_name }],
      },
    }).then((result) => {
      if (
        result.length > 0 ? result[0].dataValues.email == req.body.email : null
      ) {
        res.status(400).send("Email ya se encuentra registrado");
      } else if (
        result.length > 0
          ? result[0].dataValues.user_name == req.body.user_name
          : null
      ) {
        res.status(400).send("Nombre de usuario ya se encuentra registrado");
      } else {
        // Se ejecuta el registro de usuario
        db.User.create({
          name: req.body.name,
          user_name: req.body.user_name,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          avatar: req.file ? req.file.filename : "user-1657151406387.png",
          deleted: 0,
          role_id: 2,
        })
          .then((confirm) => {
            let result;
            if (confirm) {
              result = {
                meta: {
                  status: 200,
                  total: confirm.length,
                  url: "api/users/create",
                },
                data: "Usuario registrado satisfactoriamente",
              };
              res.status(201).send(result);
            }
          })
          .catch((error) => res.status(409).send(error));
      }
    });
  },
};

module.exports = usersAPIController;
