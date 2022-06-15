/* const productController = {

    productDetail : (req,res)=> {
        return res.render ("productDetail");
    },

    productCart : (req,res) => {
        return res.render ('productCart');
    }
}

module.exports = productController;
 */

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render("/productDetail", {
			products
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let product = products.find(product => product.id == id);
		res.render('productDetail', {
			product
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		/* res.send("Producto nuevo agregado"); */
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			discount: req.body.discount,
			image: "default-image.png",
			category: req.body.category
		}

		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

		res.redirect("/productDetail");
	},

	// Update - Form to edit
	edit: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit', {productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productToEdit = products.find(product => req.params.id == product.id);

		let editedProduct = {
			id: req.params.id,
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			discount: req.body.discount,
			image: productToEdit.image,
			category: req.body.category
		}

		let indice = products.findIndex(product => product.id == req.params.id);
		products[indice] = editedProduct;

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/productDetail");
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let finalProducts = products.filter(product => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		
		res.redirect("/productDetail");
	}
};

module.exports = controller;