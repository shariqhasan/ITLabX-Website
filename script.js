```javascript
/* =====================================================
   ITLabX WEBSITE
   Main JavaScript
   ===================================================== */


/* ================= CURRENT YEAR ================= */

const yearElement = document.querySelector(".footer p:last-child");

if (yearElement) {
    yearElement.innerHTML =
        `© ${new Date().getFullYear()} ITLabX. All Rights Reserved.`;
}


/* ================= HEADER SCROLL EFFECT ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================= SMOOTH NAVIGATION ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".topic-card, .stat-box, .about-text, .youtube-box"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%cITLabX",
    "font-size: 30px; font-weight: bold;"
);

console.log(
    "Technical Education • Learn • Practice • Build"
);
```
