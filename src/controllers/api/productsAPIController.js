const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

const productsAPIController = {
  productsInDb: (req, res) => {
    let products = db.Product.findAll({where: {deleted:0}});
    let categories = db.Category.findAll({});
    Promise.all([products, categories])
      .then(([products,categories]) => {
        let dataProducts = products.map((product) => {
          let productInfo = {
            id: product.dataValues.id,
            name: product.dataValues.name,
            description: product.dataValues.description,
            category: product.dataValues.category_id,
            precio: product.dataValues.price,
            dbRelations: ["category_id", "Image", "Product_Size"],
            detailURL:
              "http://localhost:3030/api/products/" + product.dataValues.id,
          };
          return productInfo;
        });
        let newProducts = products.filter(
          (product) => product.dataValues.category_id === 1
        );
        let retroProducts = products.filter(
          (product) => product.dataValues.category_id === 2
        );

        let respuesta = {
          meta: {
            status: 200,
            total: products.length,
            categoriesCount: categories.length,
            countByCategry: {
              new: newProducts.length,
              retro: retroProducts.length,
            },
            url: "http://localhost:3030/api/products",
          },
          products: dataProducts,
        };
        res.status(200).json(respuesta);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  detail: (req, res) => {
    let id = req.params.id;
    db.Product.findByPk(id, {
      include: ["Image", "Product_Size"],
    })
      .then((product) => {
        let productImages = product.dataValues.Image;
        let productImageURL = productImages.map((product) => {
          let imagesURL = {
            imageURL: "/public/img/products/" + product.dataValues.image,
          };
          return imagesURL;
        });

        let productSize = product.dataValues.Product_Size;
        let productSizes = productSize.map((size) => {
          let sizes = {
            size: size.dataValues.size,
          };
          return sizes;
        });

        delete product.dataValues.Product_Size;
        delete product.dataValues.Image;
        let respuesta = {
          meta: {
            status: 200,
            url: "http://localhost:3030/api/products/" + id,
          },
          product: product,
          dbRelations: ["category_id", "Image", "Product_Size"],
          images: productImageURL,
          sizes: productSizes,
        };
        res.status(200).json(respuesta);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
};

module.exports = productsAPIController;
