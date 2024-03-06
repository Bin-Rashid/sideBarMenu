const hamburgerBtn =  document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector("#sidebar");
// Toggle the side navigation

hamburgerBtn.addEventListener("click",() => {
    navMenu.classList.toggle("showMenu");
});