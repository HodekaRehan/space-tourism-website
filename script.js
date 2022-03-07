const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', showMobileNav);

function showMobileNav() {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
}

// close menu when click on nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
}