const User = require('../database/models/User');

function userLoggedMiddleware (req,res,next){

    if (req.session && req.session.userLogged) {

        if (req.session.userLogged.role_id == 2){
            res.locals.isLogged = 'cliente';
            res.locals.userLogged = req.session.userLogged; // Compartir el usuario en variables locales
        }
    }

    let cookieInEmail = req.cookies.userEmail;

    const userFromCookie = (req,res) => User.findAll({
        where: { email: cookieInEmail }
    })
    .then ((result) => {
        return console.log(result);
    })

    next();
};

module.exports = userLoggedMiddleware;