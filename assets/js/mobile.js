"use strict";

(function() {







let navBox = document.querySelector('.primary-nav-box');
let burger = document.querySelector('.burger');


// closing Primary Navigation
document.body.on('click', (e) => {
   if (!navBox.classList.contains('m-hidden') && !e.target.closest('.nav') && !e.opening)
      navBox.classList.add('m-hidden');
});

window.on('scroll', () => {
   if (!navBox.classList.contains('m-hidden') && window.scrollY > 100)
      navBox.classList.add('m-hidden');
});

document.on('keyup', (e) => {
   if (!navBox.classList.contains('m-hidden') && e.code == "Escape")
      navBox.classList.add('m-hidden');
});


// opening Primary Navigation
burger.on('click', (e) => {
   if (navBox.classList.contains('m-hidden')) {
      navBox.classList.remove('m-hidden');
      e.opening = true;
   }
});







window.matchMedia( '(max-width: 768px)' ).addListener(e => { // // maxWidth768
   if(e.matches) { document.getElementById('aside').style.minHeight = 75 + 'px';} });

}());