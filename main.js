window.onscroll = function() {stickyNavBar()}

var nav_bar = document.getElementById("nav-bar")
var main_page = document.getElementById("main-page")
var intro = document.getElementById("intro")
var sticky = nav_bar.offsetTop
var nav_replace = document.createElement("div")
nav_replace.setAttribute("id", "nav-replace")

function stickyNavBar() {
  if(window.pageYOffset >= sticky) {
    nav_bar.classList.add("sticky")
    main_page.insertBefore(nav_replace, intro)
  }
  else {
    nav_bar.classList.remove("sticky")
    main_page.removeChild(nav_replace)
  }
}
