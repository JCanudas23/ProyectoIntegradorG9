const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

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

    store: (req,res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

      let productImage;
      if (req.file) {
        productImage = req.file.filename
      } else {
        productImage = 'default.png'
      }

      let newProduct = {
        id: products[products.length - 1].id + 1,
        category: req.body.category,
        image: productImage,
        name: req.body.name,
        descripcion: req.body.descripcion,
        color: req.body.color,
        price: req.body.price
      }

      products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect("/products");
    },
    
    modifyProduct : (req,res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
      let id = req.params.id;
      let product = products.find(product => product.id == id);
      res.render ('edit', {product});
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
