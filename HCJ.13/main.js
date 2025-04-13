const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});



const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};


ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content .section_subheader", {
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
});
ScrollReveal().reveal(".header_content .section_describtion", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1500,
});
ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});



ScrollReveal().reveal(".skill_content .section_subheader", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".skill_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".skill_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".skill_btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".skill_card", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
    delay: 2000,
});

const portfolio = document.querySelector(".portfolio_image");

const portfolioContent = Array.from(portfolio.children);

portfolioContent.forEach((item) => {
   const duplicateNode = item.cloneNode(true);
   duplicateNode.setAttribute("aria-hidden", true);
   portfolio.appendChild(duplicateNode);
});



const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});












