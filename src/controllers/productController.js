const productController = {

    productDetail : (req,res)=> {
        return res.render ("productDetail");
    },

    productCart : (req,res) => {
        return res.render ('productCart');
    }
}

module.exports = productController;

