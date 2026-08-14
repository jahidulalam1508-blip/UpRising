// =========================================
// UP RISING
// Main JavaScript
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

});


// Update footer year automatically
const yearElement = document.querySelector(".footer-bottom p");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} UP Rising. All rights reserved.`;

}


// Small scroll effect for navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.style.background =
            "rgba(8, 11, 18, 0.92)";

    } else {

        navbar.style.background =
            "rgba(8, 11, 18, 0.78)";

    }

});
