const nav = document.querySelector(".nav");
const openNav = document.querySelector(".nav__open");
const closeNav = document.querySelector(".nav__close");
const navLink = document.querySelectorAll(".nav__link");
const overlay = document.querySelector(".overlay");

openNav.addEventListener("click", () =>{
    nav.classList.toggle("toggle");
    overlay.classList.add("active")
});

closeNav.addEventListener("click", () => {
    nav.classList.remove("toggle");
    overlay.classList.remove("active");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("toggle");
        overlay.classList.remove("active");
    });
});

const tabs = document.querySelectorAll(".tab__btn");
const contents = document.querySelectorAll(".tab__content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        
        const target = tab.dataset.target;
        const matchingContent = document.querySelector(`.tab__content[data-content="${target}"]`);
        matchingContent.classList.add("active");
    });
});