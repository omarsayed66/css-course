// For Page Button Popup
const btnPages = document.getElementById("page");
const menu = document.getElementById("menu");
const arrow = document.getElementById("arrow");
btnPages.addEventListener("click", () => {
  pages();
});
function pages() {
  menu.classList.toggle("active");
  btnPages.classList.toggle("active");
  arrow.classList.toggle("active");
  menu.classList.toggle("active-rot");
}

// .........................................................................................................//

// For Menu Button Befroe 990px

// Changing The Figure Of Borders
const menuToggle = document.getElementById("menu-toggle-id");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuMedia();
});
function menuMedia() {
  menuToggle.classList.toggle("change");
  nav.classList.toggle("change-visibility");
}

// Hidden And Display THe Navigation Bar

// .........................................................................................................//
