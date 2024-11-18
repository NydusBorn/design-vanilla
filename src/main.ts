import './style.scss'

window.addEventListener("scroll",() => {
    const navbar = document.querySelector("nav")!
    if (window.scrollY >= 450){
        navbar.style.backdropFilter = "blur(10px)"
        navbar.style.marginTop = `${window.scrollY}px`
    }
    else{
        navbar.style.backdropFilter = ""
        navbar.style.marginTop = ""
    }
})