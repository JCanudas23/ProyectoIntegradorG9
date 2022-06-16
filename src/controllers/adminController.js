



const adminController = {

    createProduct : (req,res) => {
        return res.render ('product-Create');
    },

    modifyProduct : (req,res) => {
        return res.render ('product-Edit');
    }
}

module.exports = adminController;