import "./index.css";
import linkedInIcon from "./assets/img/icons/linkedin_icon.svg"
import gitHubIcon from "./assets/img/icons/github_icon.svg"
import emailIcon from "./assets/img/icons/email_icon.svg"


const dropdown = document.querySelector(".nav--dropdown");
const contactList = document.querySelector(".contact__list");

document.addEventListener("click", toggleDropdown);

(function renderContactList() {
    const entries = [
        {
            base: "mailto:",
            handle: "sjohannknecht@protonmail.com",
            alt: "Email Icon",
            icon: emailIcon,
            text: "sjohannknecht@protonmail.com"
        },
        {
            base: "https://github.com/",
            handle: "sjohannknecht",
            alt: "GitHub Icon",
            icon: gitHubIcon,
            text: "GitHub"
        },
        {
            base: "https://linkedin.com/in/",
            handle: "steffen-j-7b2370249",
            alt: "LinkedIn Icon",
            icon: linkedInIcon,
            text: "LinkedIn"
        }]
    const nodes = [];
    entries.forEach((element) => {
        nodes.push(createContactListItem(element))
    })
    contactList.replaceChildren(...nodes);
})();

function toggleDropdown(e) {
    if (e.target.classList.contains("nav__button--mobile") || e.target.classList.contains("nav__icon--dropdown")) {
        dropdown.classList.toggle("hidden");
    } else {
        dropdown.classList.add("hidden");
    }
}

function createContactListItem(data) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", data.base + data.handle);
    a.classList.add("contact__anchor");
    li.appendChild(a);
    const img = document.createElement("img");
    img.classList.add("icon");
    img.setAttribute("alt", data.alt);
    img.setAttribute("src", data.icon);
    a.textContent = data.text;
    a.insertBefore(img, a.firstChild);
    return li;
}