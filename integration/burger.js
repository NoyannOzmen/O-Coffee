const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".item-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const displayFull = document.querySelector(".display-full");
const coffeeContainer = document.querySelectorAll(".catalogue-coffee")
console.log(coffeeContainer);

displayFull.addEventListener("click", displayCatalogue)

function displayCatalogue() {
    coffeeContainer.forEach(n => n.classList.toggle("active"));
    displayFull.classList.toggle("hidden");
}