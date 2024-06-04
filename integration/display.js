const displayFull = document.querySelector(".display-full");
const coffeeContainer = document.querySelectorAll(".catalogue-coffee")

displayFull.addEventListener("click", displayCatalogue)

function displayCatalogue() {
    coffeeContainer.forEach(n => n.classList.toggle("active"));
    displayFull.classList.toggle("hidden");
}