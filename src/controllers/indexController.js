const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../public/data/products.json');

const indexController = {
    index : (req,res)=> {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const nuevos = products.filter(function(product){
			return product.category == 'nuevo'
		});
		const old = products.filter(function(product){
			return product.category == 'retro'
		});
		res.render('index', {
            old,
			nuevos
		});
    }
}

module.exports =indexController;