AOS.init({
    offset: 250,
    duration: 1000,
    delay: 100
});

function myFunction(x) {
    if (x.matches == true) { // If media query matches
        var i;
        for (i = 0; i < 40; i++) {
            document.getElementsByTagName("div")[i].removeAttribute("data-aos");
        }
    }
}

var x = window.matchMedia("(max-width: 765px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes