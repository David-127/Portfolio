let animationtext = document.querySelector('.mainindex');
let abouttext = document.querySelector('.articleabout');

window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 250) {
        // user scrolled more than 150px, do something ...
     animationtext.style.animation='textslide 3s 1' ;
     animationtext.style.visibility='visible';
    }
    })

    window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 5) {
        // user scrolled more than 150px, do something ...
     abouttext.style.animation='aboutslide 3s 1' ;
     abouttext.style.visibility='visible';
    }
    })
    