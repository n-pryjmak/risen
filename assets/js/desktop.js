"use strict";

(function() {







let navBox = document.querySelector('.primary-nav-box');
let homeLink = document.querySelector('.nav').firstElementChild;



window.on('scroll', function() {

   if (window.scrollY > 228 && homeLink.hidden) {
      homeLink.hidden = false; navBox.classList.toggle('scrolled');

      // console.log('class "scroled" has been ADDED to navigation');
   }
   else
   if (window.scrollY <= 228 && !homeLink.hidden) {
      homeLink.hidden = true; navBox.classList.toggle('scrolled');
      
      // console.log('class "scroled" has been REMOVED from navigation');
   }

});





desctopMedia.addListener(e => {
   if(e.matches) { document.getElementById('aside').style.minHeight = document.body.offsetHeight + 'px';} });

}());