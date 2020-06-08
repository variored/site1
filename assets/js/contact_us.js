var nav_menu_contact_us = document.getElementById("nav_menu_contact-us");
var contact_us_empty_space = document.getElementById("contact-us_empty-space");
var contact_us = document.getElementById("contact-us");
var contact_us_close = document.getElementById("contact-us_close");

nav_menu_contact_us.onclick = ContactClicked;
contact_us_empty_space.onclick = ContactClicked;
addEventListener("keydown", keyPressed);
contact_us_close.onclick = ContactClicked;

function ContactClicked(){
    console.log("contact_us clicked");
    if (contact_us.classList.contains("visible")){
        contact_us.classList.remove("visible");
        contact_us_empty_space.classList.remove("visible");
    }
    else{
        contact_us.classList.add("visible");
        contact_us_empty_space.classList.add("visible");
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