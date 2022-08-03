function adminLoggedMiddleware (req,res,next){
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        if (req.session.userLogged.role_id == 1){
            res.locals.isLogged = 'admin';
        }
    }
    next();
};

module.exports = adminLoggedMiddleware;