let animationtext = document.querySelector('.mainindex')

window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 250) {
        // user scrolled more than 150px, do something ...
     animationtext.style.animation='textslide 3s 1' ;
     animationtext.style.visibility='visible';
    }
    else{
    }
    })