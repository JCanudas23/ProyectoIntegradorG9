const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

const productsFilePath = path.join(__dirname, '../data/products.json');

const indexController = {
    index : (req,res)=> {
		db.Product.findAll({
			include: ['Category','Product_Image','Product_Size']
		  }
		  )
			.then((products) => {
				const nuevos = products.filter(function(product){
					return product.Category.category == 'Nuevo'
				});
				const old = products.filter(function(product){
					return product.Category.category == 'Retro'
				});
				res.render('index', {nuevos,old});
			})
			.catch( error =>
			  res.send(error)
			)
    }
}

module.exports =indexController;