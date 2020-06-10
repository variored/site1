var body = document.body;
var preloader = document.getElementById("preloader");
var loader = document.getElementById("loader");

body.onload = Loaded;

function Loaded(){
    setTimeout(Show, 1000);
}

function Show(){
    preloader.classList.add("preloader_done");
    setTimeout(SetDisabled, 2000);
}
function SetDisabled(){
    preloader.classList.add("prealoader_disabled");
}