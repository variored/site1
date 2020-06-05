var footer_header_menu = document.getElementById("footer_header_menu");
var footer_header_contact = document.getElementById("footer_header_contact");
var footer_header_newsletter = document.getElementById("footer_header_newsletter");

var footer_column_grid_menu = document.getElementById("footer_column-gird-menu");
var footer_column_gird_contact = document.getElementById("footer_column-gird-contact");
var footer_column_gird_newsletter = document.getElementById("footer_column-gird-newsletter");


footer_header_menu.onclick = menuClick;
footer_header_contact.onclick = contactClick;
footer_header_newsletter.onclick = newsletterClick;


function menuClick(){
    console.log("menu clicked");

    if (footer_column_grid_menu.classList.contains("footer_columb_sub_opened")){
        footer_column_grid_menu.classList.remove("footer_columb_sub_opened");
    }
    else{
        footer_column_grid_menu.classList.add("footer_columb_sub_opened");    
    }
}
function contactClick(){
    if (footer_column_gird_contact.classList.contains("footer_columb_sub_opened")){
        footer_column_gird_contact.classList.remove("footer_columb_sub_opened");
    }
    else{
        footer_column_gird_contact.classList.add("footer_columb_sub_opened");    
    }
}
function newsletterClick(){
    if (footer_column_gird_newsletter.classList.contains("footer_columb_sub_opened")){
        footer_column_gird_newsletter.classList.remove("footer_columb_sub_opened");
    }
    else{
        footer_column_gird_newsletter.classList.add("footer_columb_sub_opened");    
    }
}