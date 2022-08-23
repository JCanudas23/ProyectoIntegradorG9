const express = require('express');
const session = require('express-session');
const path = require('path');
const methodOverride = require("method-override");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const adminLoggedMiddleware = require("./middlewares/adminLoggedMiddleware");

const app = express();

app.use(session({
    secret:"Esto nadie lo sabe Lacez Society",
    resave: false,
    saveUninitialized: false
}));

//Middlewares
app.use(userLoggedMiddleware);
app.use(adminLoggedMiddleware);

app.use(express.static("public"));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride("_method"));

//view engine setup (EJS)
app.set ("view engine", "ejs");
app.set("views", path.resolve(__dirname,"views"));

//Llamodo a la ruta de las APIs
const apiProductsRouter = require('./routers/api/productAPIRouter');
const apiUsersRouter = require('./routers/api/userAPIRouter');

app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);


//Ejecuto el llamado a mis rutas
const indexRouter = require ('./routers/indexRouter');
const productRouter = require ('./routers/productRouter');
const userRouter = require ('./routers/userRouter');

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/user', userRouter);
app.use((req,res,next) => {
    res.status(404).render('404')
})

//Activando el servidor desde express
app.listen(3030, ()=> {
    console.log("Bienvenido a Lacez http://localhost:3030");
}); 
