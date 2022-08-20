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

app.use(userLoggedMiddleware);
app.use(adminLoggedMiddleware);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set ("view engine", "ejs");
app.set("views", path.resolve(__dirname,"views"));

const indexRouter = require ('./routers/indexRouter');
const productRouter = require ('./routers/productRouter');
const userRouter = require ('./routers/userRouter');

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/user', userRouter);

app.use((req,res,next) => {
    res.status(404).render('404')
})

app.listen(3030, ()=> {
    console.log("Bienvenido a Lacez http://localhost:3030");
}); 
