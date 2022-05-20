const express = require('express');
const app = express();
const path = require('path');
app.use(express.static("public"));

app.listen(3030, ()=> {
    console.log("Servidor Corriendo en http://localhost:3030");
}); 

app.get('/', function (req, res) {
    let indexHtml = path.resolve(__dirname, "./views/index.html");
    res.sendFile(indexHtml);
});

app.get('/productDetail', function (req, res) {
    let indexHtml = path.resolve(__dirname, "./views/productDetail.html");
    res.sendFile(indexHtml);
});

app.get('/productDetail2', function (req, res) {
    let indexHtml = path.resolve(__dirname, "./views/productDetail2.html");
    res.sendFile(indexHtml);
});

app.get('/productCart', function (req, res) {
    let indexHtml = path.resolve(__dirname, "./views/productCart.html");
    res.sendFile(indexHtml);
});

app.get('/register', function (req, res) {
    let indexHtml = path.resolve(__dirname, "./views/register.html");
    res.sendFile(indexHtml);
});

app.get('/login', function (req, res) {
    let indexHtml = path.resolve(__dirname, "./views/login.html");
    res.sendFile(indexHtml);
});