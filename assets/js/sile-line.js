//VARIABLES
var sitesFrame = document.getElementById("sitesFrame");
var form_number = document.getElementById("form_number");
var form_button = document.getElementById("form_button");

//EVENTS INIT
form_button.onclick = Form_botton_click;

//START POINT
PrintSites(form_number.value);

//FUNCTIONS
function PrintSites(max){
    sitesFrame.innerHTML = "";
    
    for (var i = 1; i <= max; i++){
        sitesFrame.innerHTML += `<a href="/site${i}">SITE ${i}</a><br/>`;
    }
}
function Form_botton_click(){
    PrintSites(form_number.value);
}