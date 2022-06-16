const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override");

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.set ("view engine", "ejs");


app.listen(3030, ()=> {
    console.log("Servidor Corriendo en http://localhost:3030");
}); 

app.set("views", path.resolve(__dirname,"views"));

const indexRouter = require ('./routers/indexRouter');

const productRouter = require ('./routers/productRouter');

const userRouter = require ('./routers/userRouter');



app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/user', userRouter);
app.use('/', productRouter);
app.use('/edit', productRouter);
app.use('/', userRouter);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
