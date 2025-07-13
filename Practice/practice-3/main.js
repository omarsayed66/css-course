// .....................................Menu Toggle......................................................//
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

// ..............................................................................For Section Five
const bigBox = document.getElementsByClassName("big-box");
const bigBox2 = document.getElementsByClassName("big-box-2");
const bigBox3 = document.getElementsByClassName("big-box-3");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const breakfast = document.getElementById("main");
const launch = document.getElementById("launch");
const dinner = document.getElementById("dinner");

breakfast.addEventListener("click", () => {
  brk();
});

function brk() {
  one.classList.remove("no-active");
  three.classList.remove("active");
  two.classList.remove("active");

  breakfast.classList.add("active");
  dinner.classList.remove("active");

  launch.classList.remove("active");
}

launch.addEventListener("click", () => {
  laun();
});

function laun() {
  one.classList.add("no-active");
  three.classList.remove("active");
  two.classList.add("active");

  breakfast.classList.remove("active");
  dinner.classList.remove("active");

  launch.classList.add("active");
}

dinner.addEventListener("click", () => {
  dinn();
});

function dinn() {
  one.classList.add("no-active");
  two.classList.remove("active");
  three.classList.add("active");

  breakfast.classList.remove("active");
  launch.classList.remove("active");
  dinner.classList.add("active");
}

// ..................................................Slides

const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");

const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");

const slides = document.getElementById("slides");

button1.addEventListener("click", () => {
  zr1();
});

function zr1() {
  slide1.classList.add("active");
  slide1.classList.remove("no-active");

  slide2.classList.remove("active");
  slide2.classList.add("no-active");
}

// ...

button2.addEventListener("click", () => {
  zr2();
});

function zr2() {
  slide2.classList.add("active");
  slide2.classList.remove("no-active");

  slide1.classList.remove("active");
  slide1.classList.add("no-active");
}

// .......................................For Scroll Button...............................................

// Get the button:
let button = document.getElementById("button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
