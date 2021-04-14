'use strict';


// PRE-LOADER --------------------------------- //

window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  loader.classList.add('preload-finish'); 
 
})


// SMOOTH SCROLLING --------------------------------- //

//add smooth scrolling when clicking any anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});



// CURSOR --------------------------------- //

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.a-lnk');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })

    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    })
});



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

document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  var dataText = [
    'creative developer.',
    'frontend developer.',
    'creator.',
    'father.',
    'musician.',
    'soccer fan.',
    "architectural enthusiast."
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector('.type-text').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
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
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 1000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
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
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
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
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}


// function showNav(id, show) {
//   document.getElementById(id).style.width = show ? "100%" : "0%";
// }


// showNav("prjOne", true);
// showNav("prjOne", false);

// showNav("prjTwo", true);
// showNav("prjTwo", false);

// showNav("prjThree", true);
// showNav("prjThree", false);

// showNav("prjFour", true);
// showNav("prjFour", false);

// showNav("abtNav", true)
// showNav("abtNav", false)


// ABOUT --------------------------------------------------- //

function abtOpenNav() {
  document.getElementById('abtNav').style.width = '100%';
}

function abtCloseNav() {
  document.getElementById('abtNav').style.width = '0%';
}


// PROJECTS --------------------------------------------------- //
//  PRJ 1
function workOpenNav() {
  document.getElementById('prjOne').style.width = '100%';
}

function workCloseNav() {
  document.getElementById('prjOne').style.width = '0%';
}

// // // prj 2
function workTwoOpenNav() {
  document.getElementById('prjTwo').style.width = '100%';
}

function workTwoCloseNav() {
  document.getElementById('prjTwo').style.width = '0%';
}

// // // prj 3
function workThreeOpenNav() {
  document.getElementById('prjThree').style.width = '100%';
}

function workThreeCloseNav() {
  document.getElementById('prjThree').style.width = '0%';
}

// // // prj 4
function workFourOpenNav() {
  document.getElementById('prjFour').style.width = '100%';
}

function workFourCloseNav() {
  document.getElementById('prjFour').style.width = '0%';
}



// TEXT FADE-IN --------------------------------------------------- //

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC8CbbfEIZ5Z9Kw_P-qt2GmxTvaVJFgnLU",
    authDomain: "shargene-zangana.firebaseapp.com",
    projectId: "shargene-zangana",
    storageBucket: "shargene-zangana.appspot.com",
    messagingSenderId: "832427855365",
    appId: "1:832427855365:web:98cc046c56b7212c61166c",
    measurementId: "G-BGXWZ4ES2E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


  // Reference messages collection 
  let messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form

function submitForm(e) {
  e.preventDefault();
 
  //Get Values
  let fname = getInputVal('fname');
  let lname = getInputVal('lname');
  let phone = getInputVal('phone');
  let email = getInputVal('email');
  let country = getInputVal('country');
  let subject = getInputVal('subject');

  // Save message
  saveMessage(fname, lname, phone, email, country, subject);

  // document.getElementById('contactForm').requestFullscreen()
  
  // Show Alert
  document.querySelector('.alert').style.display = 'block';

  // Hide Alert After 3 Seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // CLear Form

  document.getElementById('contactForm').reset();
}

// Funcion to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(fname, lname, phone, email, country, subject) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    phone: phone,
    email: email,
    country: country,
    subject: subject
  });
}


