"use strict"; 



// SMOOTH SCROLLING --------------------------------- //

//add smooth scrolling when clicking any anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });

  });

});
//<a href="#someOtherElementID"> Go to Other Element Smoothly </a>

// NAV OFF-CAMPUS

var navTrigger = document.getElementsByClassName('nav-trigger')[0],
    body = document.getElementsByTagName('body')[0],
    navMenu = document.getElementsByClassName('nav');

navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
    event.preventDefault();
    body.classList.toggle('nav-open');

}

// TYPE TEXT ANIMATION --------------------------------------------------- //

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "frontend developer.", "designer.", "creator.", "father.","musician.","soccer fan.","punching bag for my kid's."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".type-text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 1000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});






// ELEMENT REVEAL --------------------------------------------------- //


// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}















// ABOUT

function abtOpenNav() {
    document.getElementById("abtNav").style.width = "100%";
}

function abtCloseNav() {
    document.getElementById("abtNav").style.width = "0%";
}




// services

function servOpenNav() {
    document.getElementById("servNav").style.width = "100%";
}

function servCloseNav() {
    document.getElementById("servNav").style.width = "0%";
}



// work
// prj 1
function workOpenNav() {
  document.getElementById("workNav").style.width = "100%";

}

function workCloseNav() {
  document.getElementById("workNav").style.width = "0%";
}

// prj 2
function workTwoOpenNav() {
  document.getElementById("prjTwo").style.width = "100%";

}

function workTwoCloseNav() {
  document.getElementById("prjTwo").style.width = "0%";
}

// prj 3
function workThreeOpenNav() {
  document.getElementById("prjThree").style.width = "100%";

}

function workThreeCloseNav() {
  document.getElementById("prjThree").style.width = "0%";
}

// document.getElementById("workNav").addEventListener('click', workOpenNav);

// function workOpenNav() {
//   document.getElementById("workNav").style.width = "100%";


// }

// function workCloseNav() {
//   document.getElementById("workNav").style.width = "0%";
// }





// TEXT FADE-IN --------------------------//  

