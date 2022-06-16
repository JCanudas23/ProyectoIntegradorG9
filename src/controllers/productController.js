const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../public/data/products.json');

const productController = {

    index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('listaDeProducto', {
			products
		})
    },

    detail : (req,res)=> {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let product = products.find(product => product.id == id);
		res.render('detail', {
			product
		})
    },

    productCart : (req,res) => {
        return res.render ('productCart');
    },

    createProduct : (req,res) => {
        return res.render ('product-Create');
    },
    
    modifyProduct : (req,res) => {
        return res.render ('product-Edit');
    }   
}

module.exports = productController;
