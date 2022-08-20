const burgerMenu = document.querySelector('#burgerMenu');
const navMenu = document.querySelector('#navMenu');
const body = document.querySelector('body');
const closeButton = document.querySelector('#closeButton')

burgerMenu.addEventListener ('click', function (){
    navMenu.classList.toggle('show')
    body.classList.toggle('fijar-body')
});

closeButton.addEventListener ('click', function (){
    navMenu.classList.toggle('show')
    body.classList.toggle('fijar-body')
});
