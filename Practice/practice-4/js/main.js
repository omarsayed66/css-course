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

window.addEventListener("load", function () {
  // Add the animate class after a small delay for effect
  setTimeout(function () {
    document.getElementById("h-1").classList.add("animate");
  }, 200);
});

window.addEventListener("load", function () {
  // Add the animate class after a small delay for effect
  setTimeout(function () {
    document.getElementById("link-1").classList.add("animate");
  }, 200);
});
window.addEventListener("load", function () {
  // Add the animate class after a small delay for effect
  setTimeout(function () {
    document.getElementById("link-2").classList.add("animate");
  }, 200);
});

// ........................................................................................................//

const btnRight = document.getElementById("btn-1");
const btnLeft = document.getElementById("btn-2");

const slideOne = document.getElementById("slide-1");
const slideTwo = document.getElementById("slide-2");

btnLeft.addEventListener("click", () => {
  leftClick();
});

function leftClick() {
  slideOne.classList.toggle("non-active");
  slideTwo.classList.toggle("active");
}

btnRight.addEventListener("click", () => {
  righClick();
});

function righClick() {
  slideOne.classList.toggle("non-active");
  slideTwo.classList.toggle("active");

  document.getElementById("h-2").classList.add("animate-2");
  document.getElementById("link-1-2").classList.add("animate-2");
  document.getElementById("link-2-2").classList.add("animate-2");
}

// ............................

// For Booking Part And Video Part Animation When Load And Scroll
document.addEventListener("DOMContentLoaded", () => {
  const boxInput = document.querySelector(".box-input");
  const video = document.querySelector(".video");

  function checkVisibility() {
    const boxTop = boxInput.getBoundingClientRect().top;
    const boxBottom = boxInput.getBoundingClientRect().bottom;
    const videoTop = video.getBoundingClientRect().top;
    const videoBottom = video.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // لو أي جزء من العنصر ظاهر في الشاشة
    if (boxTop < windowHeight && boxBottom > 0) {
      boxInput.classList.add("show");
    }

    // لو أي جزء من العنصر ظاهر في الشاشة
    else if (videoTop < windowHeight && videoBottom > 0) {
      video.classList.add("show");
    }
  }

  // فحص عند تحميل الصفحة
  checkVisibility();

  // فحص عند النزول بالسكرول
  window.addEventListener("scroll", checkVisibility);
});
// .....................End...................................................................................

// This For Imags To Show Smooth When Scroll And Load
const imgs = document.querySelectorAll(".about .cont .img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, i * 200); // ← تأخير تدريجي
        observer.unobserve(entry.target); // عشان ميتكررش
      }
    });
  },
  { threshold: 0.2 }
); // يشتغل لما 20% من العنصر يدخل الشاشة

imgs.forEach((img) => observer.observe(img));
// .....................End...................................................................................

// For Counter
// جلب كل العدادات
const counters = document.querySelectorAll(".about h2");
let started = false; // علشان ما يتكررش العد

function runCounters() {
  counters.forEach((counter) => {
    counter.innerText = "0"; // يبدأ من صفر
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let step = Math.ceil(target / 200); // سرعة العد

    let counterInterval = setInterval(() => {
      count += step;
      if (count >= target) {
        counter.innerText = target; // يوصل للرقم النهائي
        clearInterval(counterInterval);
      } else {
        counter.innerText = count;
      }
    }, 20); // كل 20ms يحدث الرقم
  });
}
// End Counter
// .....................End...................................................................................
// نشغل العد أول ما نوصل للقسم
window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about");
  const sectionTop = aboutSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight && !started) {
    runCounters();
    started = true; // مره واحدة بس
  }
});

// End...................................
// .....................End...................................................................................

// For Animation About Boxses
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".boxses");

  function checkBoxes() {
    const triggerBottom = window.innerHeight * 1; // متى تظهر قبل الوصول للعنصر
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);
  checkBoxes(); // تنفيذ عند التحميل مباشرة
});
// End // For Animation About Boxses

// For Animation About Boxses
document.addEventListener("DOMContentLoaded", () => {
  const headRoom = document.querySelectorAll(".head-room");

  function amr() {
    const headRoomBottom = window.innerHeight * 0.9; // متى تظهر قبل الوصول للعنصر
    headRoom.forEach((headRoom) => {
      const headRoomTop = headRoom.getBoundingClientRect().top;
      if (headRoomTop < headRoomBottom) {
        headRoom.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", amr);
  amr(); // تنفيذ عند التحميل مباشرة
});
// End // For Animation About Boxses
// .....................End...................................................................................
