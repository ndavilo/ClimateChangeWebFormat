let navbar = document.querySelector(".my-navbar");

//sidebar open and close

let menuOpenBtn = document.querySelector(".my-navbar .my-bx-menu");
let menuCloseBtn = document.querySelector(".my-nav-links .my-sidebar-logo");
let navLinks = document.querySelector(".my-nav-links")

menuOpenBtn.addEventListener("click", () => {
  navLinks.style.left = "0"
});
menuCloseBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%"
})
let newsArrow = document.querySelector(".news-arrow");
newsArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show1");
})
let moreArrow = document.querySelector(".more-arrow");
moreArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show2");
})
let cryptoArrow = document.querySelector(".crypto-arrow");
cryptoArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show3");
})
let profileArrow = document.querySelector(".profile-arrow");
profileArrow.addEventListener("click", () => {
  navLinks.classList.toggle("show4");
})
