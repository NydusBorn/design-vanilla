import './style.scss'
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