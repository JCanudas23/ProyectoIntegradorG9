const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const { sequelize } = require('../database/models');

const productController = {

    index: (req, res) => {
    db.Product.findAll({
      include: ['Category','Image','Product_Size']
    })
    .then ((products)=> {
			const activos = products.filter(function(product){
				return product.deleted == 0;
			})
			return activos
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
      {include: ['Category','Image','Product_Size']}
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
          }
      )
      .then ((result)=> {
        let newProductId = result.dataValues.id
        let productSizes = req.body.size.length > 1 ? req.body.size : [req.body.size];
        let sizes = productSizes.map (size => {
          return {product_id : newProductId,  size_id : size}
        })
        console.log("---------------------------> Tallas", productSizes);
        return db.Product_Size.bulkCreate(sizes)
      })
     .then ((result)=> {
        let newProductId = result[0].dataValues.product_id
        let images = req.files
        console.log("---------------------------> ID", newProductId);
        console.log("---------------------------> Imagen", images);
         let imagesTocreate = images.map(file => {
          return { image: file.filename , product_id: newProductId}
        })
        console.log("---------------------------> imagenes", imagesTocreate);
        db.Image.bulkCreate(imagesTocreate)
        res.redirect ('products')
      })
      .catch( error =>
        res.send(error)
      )
    },
    
    modifyProduct : (req,res) => {
      let id = req.params.id;
      db.Product.findByPk (id,
        {include: ['Category','Image','Product_Size']}
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

      db.Product.update(
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            category_id: req.body.category,
            deleted : 0,
        },
        {
          where: { id: req.params.id },
        }
    )
    .then(()=>{
      db.Product_Size.destroy({
        where: { product_id: req.params.id },
      })
    })
    .then (()=> {
      let productSizes = req.body.size.length > 1 ? req.body.size : [req.body.size];
      let sizes = productSizes.map (size => {
        return {product_id : req.params.id,  size_id : size}
      })
      return db.Product_Size.bulkCreate(
        sizes,
        {
          updateOnDuplicate: ["product_id", "size_id"],
        })
    })
    .then (()=> {
      let images = req.files
      let imagesTocreate = images.map(file => {
        return { image: file.filename , product_id: req.params.id}
      })
      db.Image.bulkCreate(imagesTocreate,
        {
          updateOnDuplicate: ["size_id","product_id"],
        })
      res.redirect ('/products')
    })
    .catch( error =>
      res.send(error))
    },

    deleteProduct : (req, res) => {

      db.Product.update({
        deleted : 1,
      },{
        where: { id: req.params.id },
      })
      .then ((result)=>{ 
        console.log('-------------------> resultado', result);
        res.redirect("/products");
      })
/*       db.Product.destroy({
        where: { id: req.params.id },
      })
      .then (()=>{
        res.redirect("/products");
      }) */
      .catch( error =>
        res.send(error))
    }
    
}

module.exports = productController;
