const indexController = {
    index : (req,res)=> {
        return res.render ("index");
    }
}

module.exports =indexController;

/* const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const indexController = {
    index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const nuevasEntradas = products.filter(function(product){
			return product.category == 'nuevasEntradas'
		});
		const recomendados = products.filter(function(product){
			return product.category == 'recomendados'
		});
		res.render('index', {
			nuevasEntradas,
			recomendados
		});
	},

};

module.exports =indexController; */