let animationtext = document.querySelector('.mainindex');
let abouttext = document.querySelector('.articleabout');
let workTextSlide = document.querySelector('.workText');

window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 250) {
        // user scrolled more than 250px, do something ...
     animationtext.style.animation='textslide 3s 1' ;
     animationtext.style.visibility='visible';
    }
    })

    window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 5) {
     abouttext.style.animation='aboutslide 2s 1' ;
     abouttext.style.visibility='visible';
    }
    })

    window.addEventListener("scroll", (event) => {
        console.log(window.scrollY);
        if (window.scrollY > 5) {
         workTextSlide.style.animation='workslide 1s 1' ;
         workTextSlide.style.visibility='visible';
        }
        })