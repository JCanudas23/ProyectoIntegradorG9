function guestMiddleware(req,res,next){

    if (req.session && req.session.userLogged) {
        if (req.session.userLogged.role_id == 2){
            res.locals.isLogged = 'cliente';
            res.redirect('/user/profile');
        }
    }
    next();
};

module.exports = guestMiddleware;