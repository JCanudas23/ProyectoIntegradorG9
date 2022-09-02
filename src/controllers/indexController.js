const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

const productsFilePath = path.join(__dirname, '../data/products.json');

const indexController = {
    index : (req,res)=> {
		db.Product.findAll({
			include: ['Category','Image','Product_Size']
		  }
		  )
		  .then ((products)=> {
			const activos = products.filter(function(product){
				return product.deleted == 0;
			})
			return activos
		  })
			.then((products) => {
				/* console.log('----------------->',products); */
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
    },

	politicas : (req,res) => {
		return res.render ('politicas');
	}
}

module.exports =indexController;