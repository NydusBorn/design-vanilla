import './style.scss'

window.addEventListener("scroll",() => {
    const navbar = document.querySelector("nav")!
    const logo: HTMLElement = document.querySelector("#nav-logo")!
    const phone: HTMLElement = document.querySelector("#phone-number")!
    const link: NodeListOf<HTMLElement> = document.querySelectorAll("nav-link")
    if (window.scrollY >= 450){
        navbar.style.backdropFilter = "blur(10px)"
        navbar.style.marginTop = `${window.scrollY}px`
        navbar.style.backgroundColor = "rgba(243, 239, 232, 0.6)"
        logo.style.backgroundImage = `url("/design-vanilla/YourTour-dark.svg")`
        phone.style.color = "#1B1F2B"
        for (const linkElement of link) {
            linkElement.style.color = "#1B1F2B"
        }
    }
    else{
        navbar.style.backdropFilter = ""
        navbar.style.marginTop = ""
        navbar.style.backgroundColor = ""
        logo.style.backgroundImage = ``
        phone.style.color = ""
        for (const linkElement of link) {
            linkElement.style.color = ""
        }
    }
})