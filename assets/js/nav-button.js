//VARIABLES
var header_nav__button = document.getElementById("header_nav-button");
var nav = document.getElementById("nav");
var nav__button_lines = document.getElementById("nav-button_lines");

//EVENTS INIT
header_nav__button.onclick = ButtonClick;

//FUNCTIONS
function ButtonClick(){
    if (nav.classList.contains("nav-active")){
        //hidding
        nav.classList.remove("nav-active");
        nav__button_lines.classList.remove("lines_active");
    }
    else{
        nav.classList.add("nav-active");
        nav__button_lines.classList.add("lines_active");
    }
}