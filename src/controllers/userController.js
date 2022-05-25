const userController = {

    login : (req,res)=> {
        return res.render ("login");
    },

    register : (req,res) => {
        return res.render ('register');
    },

    newProduct : (req,res) => {
        return res.render ('newProduct');
    }
}

module.exports = userController;
