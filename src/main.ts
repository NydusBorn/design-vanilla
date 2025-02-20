import './style.scss'
import Inputmask from "inputmask"
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav")!;
    const scrollY = window.scrollY;
    if (scrollY >= 450) {
        navbar.classList.add("navbar-scrolled");
    }
    else if (scrollY < 450) {
        navbar.classList.remove("navbar-scrolled");
    }
});

let mask_phone = new Inputmask("+ 7 (999) 999-99-99");
mask_phone.mask(document.getElementById("maker-phone")!);

let date_mask = new Inputmask("datetime", {inputFormat: "dd.mm.yyyy", placeholder: "ДД.ММ.ГГГГ", jitMasking: true});
date_mask.mask(document.getElementById("maker-from")!);
date_mask.mask(document.getElementById("maker-to")!);

let form = document.querySelector(".maker-form")!;

form.addEventListener("submit", (e) => {
    e.preventDefault();
})