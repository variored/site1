//VARIABLES
var header_nav__button = document.getElementById("header_nav-button");
var nav = document.getElementById("nav");
var nav__button_lines = document.getElementById("nav-button_lines");
var nav_empty__space = document.getElementById("nav_empty-space");
var nav_menu_contact_us = document.getElementById("nav_menu_contact-us");
var contact_us_empty_space = document.getElementById("contact-us_empty-space");
var contact_us = document.getElementById("contact-us");
var contact_us_close = document.getElementById("contact-us_close");

//EVENTS INIT
header_nav__button.onclick = ButtonClick;
nav_empty__space.onclick = ButtonClick;
nav_menu_contact_us.onclick = ContactUsClicked;
contact_us_empty_space.onclick = ContactClicked;
addEventListener("keydown", keyPressed);
contact_us_close.onclick = ContactClicked;

//FUNCTIONS
function ContactUsClicked(){
    ButtonClick();
    ContactClicked();
}
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
function ContactClicked(){
    console.log("contact_us clicked");
    if (contact_us.classList.contains("visible")){
        contact_us.classList.remove("visible");
        contact_us_empty_space.classList.remove("visible");
        document.body.style.overflow = "scroll";
    }
    else{
        contact_us.classList.add("visible");
        contact_us_empty_space.classList.add("visible");
        window.scroll(0,0);
        document.body.style.overflow = "hidden";

    }
}
function keyPressed(e){
    console.log("escape pressed");
    if (e.keyCode == 27){
        if (contact_us.classList.contains("visible")){
            ContactClicked();
        }
    }
}