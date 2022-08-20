function userLoggedMiddleware (req,res,next){

    if (req.session && req.session.userLogged) {
        if (req.session.userLogged.role_id == 2){
            res.locals.isLogged = 'cliente';
        }
    }
    next();
};

module.exports = userLoggedMiddleware;