const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

const usersAPIController = {
  usersInDb: (req, res) => {
    db.User.findAll(
        {where: {deleted:0}}
        )
      .then((users) => {

        let dataUsers = users.map(user=>{
            return user.dataValues
        })

        //Eliminamos información sensible de cada usuario
        dataUsers.forEach(user => {
            delete user.password;
            delete user.avatar;
            delete user.deleted;
            delete user.role_id;
            user.detailURL = "http://localhost:3030/api/users/" + user.id
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
    db.User.findByPk(id, {where: {deleted:0}})
      .then((user) => {

        let dataUser = user.dataValues;

        //Eliminamos información sensible
        delete dataUser.password;
        delete dataUser.deleted;
        delete dataUser.role_id;

        //Agregamos Ruta Imagen de perfil
        dataUser.avatar = "/public/img/users/" + dataUser.avatar
        
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


};

module.exports = usersAPIController;
