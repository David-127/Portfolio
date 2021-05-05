let animationtext = document.getElementsByClassName('mainindex')

window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 150) {
        // user scrolled more than 250px, do something ...
      element.addClass('mainindex');
    }
    else{
     element.removeClass('mainindex');
    }
    })