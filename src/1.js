import "./1.css";
var burger = document.querySelector('.burger');
var navMenu = document.querySelector('.nav-links');
var burgerLine = document.querySelectorAll('.burger > div');
var navMenuItems = document.querySelectorAll('.nav-links > .nav-link');
var leftArrow = document.querySelector('.laptop-select > .left');
var rightArrow = document.querySelector('.laptop-select > .right');
burger.addEventListener('click',function(){
    navMenu.classList.toggle('nav-active');
    burger.classList.toggle('burger-break');
    navMenuItems.forEach((navMenuItem,index) => {
        if(!navMenuItem.style.animation){
            navMenuItem.style.animation = `slide-in .8s ease-in forwards ${index / 8 + 0.5}s `
        }else navMenuItem.style.animation = '';
    });
})
