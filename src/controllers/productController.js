const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../public/data/products.json');

const productController = {

    productDetail : (req,res)=> {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let product = products.find(product => product.id == id);
		res.render('productDetail', {
			product
		})
    },

    productCart : (req,res) => {
        return res.render ('productCart');
    },

	listaDeProducto : (req,res) => {
        return res.render ('listaDeProducto');
    }
}

module.exports = productController;
