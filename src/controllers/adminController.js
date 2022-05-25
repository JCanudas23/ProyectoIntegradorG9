const adminController = {

    createProduct : (req,res) => {
        return res.render ('adminCreate');
    },

    modifyProduct : (req,res) => {
        return res.render ('adminModify');
    }
}

module.exports = adminController;