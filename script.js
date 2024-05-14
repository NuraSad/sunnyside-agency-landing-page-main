const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const humburgerPath = hamburger.querySelector("path");

function handleHamburgerClick() {
  navbar.classList.toggle("open");
}

hamburger.addEventListener("click", handleHamburgerClick);
