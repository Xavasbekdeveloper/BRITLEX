let navbar = document.getElementById("navbar");
let showNavList = document.getElementById('nav__list');
let barBtn = document.getElementById('hamburger__btn');
let backTop = document.getElementById("backtop");
let showBody = document.getElementById("body");


// navbar

function shrink() {
  if (scrollY > 0) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

// nav-list-shrink 

window.addEventListener("scroll", function () {
  shrink();
});

barBtn.addEventListener('click', function() {
    showNavList.classList.toggle("show-nav-list")
    showBody.classList.toggle("hide-body");
    // showBody.classList.toggle("show-body");
})



// backtop

window.addEventListener("scroll", function () {
  backtop();
});


function backtop() {
    if (scrollY > 200) {
        backTop.classList.add("show-backtop");
    } else {
        backTop.classList.remove("show-backtop");
    }
}