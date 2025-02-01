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

let date_ins = document.querySelectorAll('input[type="date"]')
for (const dateIn of date_ins) {
    dateIn.addEventListener("change", () => {
        if (dateIn.value === "") {
            dateIn.style.color = ""
        }
        else{
            dateIn.style.color = "black"
        }
    })
}

let form = document.querySelector(".maker-form")!;

form.addEventListener("submit", (e) => {
    e.preventDefault();
})