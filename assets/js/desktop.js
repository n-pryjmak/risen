"use strict";

(function() {







// let navBox = document.querySelector('.primary-nav-box');
let nav = document.querySelector('.nav');
let homeLink = nav.firstElementChild;



window.on('scroll', function() {

   if ( window.scrollY >  210 && homeLink.classList.contains('d-hidden') ) {
      homeLink.classList.remove('d-hidden');
      nav.classList.remove('margin-top');

      // navBox.classList.toggle('scrolled');

      console.log('HOME link has been ADDED to navigation');
   }
   else
   if ( window.scrollY <= 210 && !homeLink.classList.contains('d-hidden') ) {
      homeLink.classList.add('d-hidden');
      nav.classList.add('margin-top');

      // navBox.classList.toggle('scrolled');
      
      console.log('HOME link has been REMOVED from navigation');
   }

});





desctopMedia.addListener(e => {
   if(e.matches) { document.getElementById('aside').style.minHeight = document.body.offsetHeight + 'px';} });

}());