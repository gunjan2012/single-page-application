// add working of hamburger
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mob-view");
menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
// toggle the side bar when we click on particular tab-name
mobile_menu.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
// scroll effect on navigation bar
const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currScroll = window.pageYOffset; // pageYoffset gives us mouse-scroll value when scrolling
  // if current scroll less then zero or zero then it will always display navbar
  if (currScroll <= 0) {
    body.classList.remove("scroll-up");
  }
  if (currScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }
  if (currScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currScroll; // when it reaches to last it will store current scroll value as lastscroll value.
});
