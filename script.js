var burgerMenu = document.querySelector(".burger_menu");
var navbarList = document.querySelector(".navbar-list");
const menuBtn = document.querySelector(".menu_btn");
burgerMenu.addEventListener("click", () => {
  menuBtn.classList.toggle("transform");
  navbarList.classList.toggle("tablet_show");
});
