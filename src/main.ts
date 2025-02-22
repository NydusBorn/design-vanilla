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

let date_mask = new Inputmask("datetime", {inputFormat: "dd.mm.yyyy", placeholder: "\0", jitMasking: true});
date_mask.mask(document.getElementById("maker-from")!);
date_mask.mask(document.getElementById("maker-to")!);

let form = document.querySelector(".maker-form")!;

form.addEventListener("submit", (e) => {
    const from = new Date((document.getElementById("maker-from") as HTMLInputElement).value);
    const to = new Date((document.getElementById("maker-to") as HTMLInputElement).value);
    if (to < from) {
        alert("Дата до не может быть раньше даты от");
        e.preventDefault();
        return;
    }
    e.preventDefault();
})