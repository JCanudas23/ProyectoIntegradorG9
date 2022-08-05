function adminMiddleware(req,res,next){

    if (req.session && req.session.userLogged) {
        if (req.session.userLogged.role_id == 1){
            res.locals.isLogged = 'admin';
            res.redirect('/user/profile');
        }
    }
    next();
};

module.exports = adminMiddleware;