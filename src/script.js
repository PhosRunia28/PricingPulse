document.querySelector("#menu").addEventListener('click',showMenu);
const navMobile = document.querySelector("#mobile");
const menuMobile = document.querySelectorAll("#mobile a");

function showMenu(e){
    navMobile.classList.toggle("hidden");
    navMobile.classList.toggle("flex");
}