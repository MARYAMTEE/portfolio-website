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

overlay.addEventListener("click", () => {
    nav.classList.remove("toggle");
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

const buttons = document.querySelectorAll(".project__btn");
const items = document.querySelectorAll(".projects__card");

function showItems(filter){
    items.forEach(item => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });
}

showItems("all");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));

        button.classList.add("active");
        const filter = button.dataset.filter;
        showItems(filter);
    });
});

// animation upon scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2});

sections.forEach(section => {
    observer.observe(section);
});