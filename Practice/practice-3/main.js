const menu = document.getElementById("menu");
const action = document.getElementById("action");
const head = document.getElementById("head");

menu.addEventListener("click", () => {
  hundleMenu();
});

function hundleMenu() {
  menu.classList.toggle("active");
  menu.classList.toggle("change");
  head.classList.toggle("head-active");
  action.classList.toggle("is-active");
}

const page = document.getElementById("page");
const bus = document.getElementById("bus");

page.addEventListener("click", () => {
  omar();
});

function omar() {
  bus.classList.toggle("hover");
}
