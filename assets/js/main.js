"use strict";
(function() {




let navBox = document.querySelector('.primary-nav-box');
let nav = document.querySelector('.nav');
let homeLink = nav.firstElementChild;


window.addEventListener('scroll', function() {

if (window.matchMedia('(min-width: 625px)').matches) {   
   if (window.scrollY > 228 && homeLink.hidden) {
      homeLink.hidden = false; navBox.classList.toggle('scrolled');
      // console.log('class "scroled" has been ADDED to navigation');
   }
   if (window.scrollY <= 228 && !homeLink.hidden) {
      homeLink.hidden = true; navBox.classList.toggle('scrolled');
      // console.log('class "scroled" has been REMOVED from navigation');
   }
}

if (window.matchMedia('(max-width: 625px)').matches) {
   if (!navBox.hidden && window.scrollY > 40) navBox.hidden = true;
}
});





if (window.matchMedia('(max-width: 625px)').matches) {
   let burger = document.querySelector('.burger');

   burger.addEventListener('click', () => {
      if (!navBox.hidden) navBox.hidden = true; else navBox.hidden = false;
   });
}


}());