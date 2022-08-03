function userLoggedMiddleware (req,res,next){
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        if (req.session.userLogged.role_id == 2){
            res.locals.isLogged = 'cliente';
        }
    }
    next();
};

module.exports = userLoggedMiddleware;