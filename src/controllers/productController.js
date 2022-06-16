const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../public/data/products.json');

const productController = {

    index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products', {
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
        return res.render ('create');
    },
    
    modifyProduct : (req,res) => {
        return res.render ('edit');
    },   

    deleteProduct : (req, res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
  
      let finalProducts = products.filter(product => product.id != req.params.id);
      fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
      
      res.redirect("/products");
    }
}

module.exports = productController;
