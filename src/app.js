const express = require('express');
const app = express();
const path = require('path');
app.use(express.static("public"));

app.set ("view engine", "ejs");


app.listen(3030, ()=> {
    console.log("Aca comienza Lacez http://localhost:3030");
}); 

app.set("views", path.resolve(__dirname,"views"));

const indexRouter = require ('./routers/indexRouter');

const productRouter = require ('./routers/productRouter');

const userRouter = require ('./routers/userRouter');

/* const adminRouter = require ('./routers/adminRouter') */

app.use('/', indexRouter);

app.use('/products', productRouter);

app.use('/user', userRouter);

/* app.use('/', adminRouter); */

app.use(express.urlencoded({extended: false}));
app.use(express.json());
