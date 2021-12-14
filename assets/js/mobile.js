"use strict";

(function() {







let navBox = document.querySelector('.primary-nav-box');
let burger = document.querySelector('.burger');


// closing Primary Navigation
document.body.on('click', (e) => {
   if (!navBox.classList.contains('hidden') && !e.target.closest('.nav') && !e.opening)
      navBox.classList.add('hidden');
});

window.on('scroll', () => {
   if (!navBox.classList.contains('hidden') && window.scrollY > 100)
      navBox.classList.add('hidden');
});

document.on('keyup', (e) => {
   if (!navBox.classList.contains('hidden') && e.code == "Escape")
      navBox.classList.add('hidden');
});


// opening Primary Navigation
burger.on('click', (e) => {
   if (navBox.classList.contains('hidden')) {
      navBox.classList.remove('hidden');
      e.opening = true;
   }
});







window.matchMedia( 'screen and (max-width: 768px)' ).addListener(e => { // // maxWidth768
   if(e.matches) { document.getElementById('aside').style.minHeight = 75 + 'px';} });

}());