const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const { sequelize } = require('../database/models');

const productController = {

    index: (req, res) => {
    db.Product.findAll({
      include: ['Category','Product_Image','Product_Size']
    })
      .then((products) => {
        /* res.send (products) */
        res.render ('products', {products})
      })
      .catch( error =>
        res.send(error)
      )
    },

    detail : (req,res)=> {
		let id = req.params.id;
    db.Product.findByPk (id,
      {include: ['Category','Product_Image','Product_Size']}
      )
      .then((product) => {
        /* res.send (product) */
        res.render ('detail', {product})
      })
      .catch( error =>
        res.send(error)
      )
    },

    productCart : (req,res) => {
        return res.render ('productCart');
    },

    createProduct : (req,res) => {
        return res.render ('create');
    },

    store: (req,res) => {
      db.Product.create(
          {
              name: req.body.name,
              description: req.body.description,
              price: req.body.price,
              stock: req.body.stock,
              category_id: req.body.category,
              deleted : 0,
              image: [{
                image : req.file.filename
              }]
          } , {
            include : db.Image
          }
      )
      .then ((result)=> {
        let newProductId = result.dataValues.id
        let productSizes = req.body.size
        console.log('------> 1',result);
        productSizes.forEach(size => {
          return db.Product_Size.create ({
            product_id : newProductId,
            size_id : size
          }) 
        });
        
      })
     .then ((result)=> {
        console.log('------> 2',result);
        res.redirect ('products')
      })/* 
      .then ((result)=> {
        console.log('------> 3',result);
        return db.Product_Image.create ({
          product_id: 1,
          image_id : result.dataValues.id
        })
      })
      .then((result) => {
        console.log('------> Final',result);
        res.redirect ('products')
      }) */
      .catch( error =>
        res.send(error)
      )
    },
    
    modifyProduct : (req,res) => {
      let id = req.params.id;
      db.Product.findByPk (id,
        {include: ['Category','Product_Image','Product_Size']}
        )
        .then((product) => {
          /* res.send (product) */
          res.render ('edit', {product})
        })
        .catch( error =>
          res.send(error)
        )
    },

    update: (req, res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
      let id = req.params.id;
      let product = products.find(product => product.id == id);

      let editImage;
      if (req.file) {
        editImage = req.file.filename
      } else {
        editImage = product.image
      }
  
      let editedProduct = {
        id: req.params.id,
        category: req.body.category,
        image: editImage,
        name: req.body.name,
        descripcion: req.body.descripcion,
        color: req.body.color,
        price: req.body.price
      }
  
      let indice = products.findIndex(product => product.id == req.params.id);
      products[indice] = editedProduct;
  
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect("/products");
    },

    
    deleteProduct : (req, res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
  
      let finalProducts = products.filter(product => product.id != req.params.id);
      fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
      
      res.redirect("/products");
    }
}

module.exports = productController;
