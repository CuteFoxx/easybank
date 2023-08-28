const hamburgerButton = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav__list");

hamburgerButton.addEventListener("click", (e) => {
  hamburgerButton.classList.toggle("active");
});
navList.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__link")) {
    hamburgerButton.classList.remove("active");
  }
});
