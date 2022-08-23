const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

const productsAPIController = {

  productsInDb: (req, res) => {
    let products = db.Product.findAll({
      include: ["Category", "Image", "Product_Size"],
    });
    let categories = db.Category.findAll({});
    Promise.all([products, categories])
    .then((products) => {
      console.log(products[0]);
      let dataProducts = products[0].map((product) => {
        let productInfo = {
          id: product.dataValues.id,
          name: product.dataValues.name,
          descrition: product.dataValues.description,
          dbRelations: ["category_id", "Image", "Product_Size"],
          detailURL:
            "http://localhost:3030/api/products/" + product.dataValues.id,
        };
        return productInfo;
      });

      let newProducts = products[0].filter(
        (product) => product.dataValues.category_id === 1
      );
      let retroProducts = products[0].filter(
        (product) => product.dataValues.category_id === 2
      );

      let respuesta = {
        meta: {
          status: 200,
          total: products[0].length,
          categoriesCount: products[1].length,
          countByCategry: {
            new: newProducts.length,
            retro: retroProducts.length,
          },
          url: "http://localhost:3030/api/products",
        },
        products: dataProducts,
      };
      res.status(200).send(respuesta);
    })
    .catch((err) => {
        res.status(404).send(err);
    });
  },

  detail: (req, res) => {
    let id = req.params.id;
    db.Product.findByPk(id, {
      include: ["Image", "Product_Size"],
    }).then((product) => {
      let productImages = product.dataValues.Image;
      let productImageURL = productImages.map((product) => {
        let imagesURL = {
          imageURL : "/public/img/products/" + product.dataValues.image,
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
        res.status(200).send(respuesta);
    })
    .catch((err) => {
        res.status(404).send(err);
    });
  },
};

module.exports = productsAPIController;
