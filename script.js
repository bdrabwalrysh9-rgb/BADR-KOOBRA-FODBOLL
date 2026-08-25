// ===============================
// BADR KOOBRA - WEBSITE SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Scroll reveal
    const elements = document.querySelectorAll(
        ".section-title, .profile-card, .career-item, .video-card, .gallery-grid img, .contact-content"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });


    // Navbar background while scrolling
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

});
// ===============================
// GALLERY LIGHTBOX
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightboxImg.src = image.src;

        lightbox.classList.add("active");

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});
// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});

nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});
// =================================
// LOADING SCREEN
// =================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});
// =================================
// BACK TO TOP
// =================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
