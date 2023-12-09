import "./index.css";

const dropdown = document.querySelector(".nav--dropdown");

document.addEventListener("click", toggleDropdown);

function toggleDropdown(e) {
    if (e.target.classList.contains("nav__button--mobile") || e.target.classList.contains("nav__icon--dropdown")) {
        dropdown.classList.toggle("hidden");
    } else {
        dropdown.classList.add("hidden");
    }
}