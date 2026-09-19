/* =====================================================
   ITLabX WEBSITE
   Main JavaScript
   ===================================================== */


/* =====================================================
   CURRENT YEAR
   ===================================================== */

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =====================================================
   HEADER SCROLL EFFECT
   ===================================================== */

const header = document.querySelector(".header");

if (header) {

    const updateHeader = () => {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    window.addEventListener("scroll", updateHeader);

    updateHeader();
}


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    /* ================= CLOSE MENU ON LINK CLICK ================= */

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* ================= CLOSE MENU OUTSIDE ================= */

    document.addEventListener("click", event => {

        const clickedInsideMenu =
            navbar.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            navbar.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


/* =====================================================
   SMOOTH NAVIGATION
   ===================================================== */

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);

internalLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        /* Ignore empty # */

        if (!targetId || targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   REVEAL ANIMATION
   ===================================================== */

const revealElements = document.querySelectorAll(
    `
    .topic-card,
    .latest-card,
    .stat-box,
    .about-text,
    .about-stats,
    .youtube-box,
    .section-heading,
    .contact-links
    `
);


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

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

} else {

    /* Fallback for old browsers */

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


/* =====================================================
   EXTERNAL LINK SAFETY
   ===================================================== */

const externalLinks =
    document.querySelectorAll(
        'a[target="_blank"]'
    );


externalLinks.forEach(link => {

    /*
       Make sure external links have
       rel="noopener noreferrer"
    */

    const currentRel =
        link.getAttribute("rel") || "";

    if (!currentRel.includes("noopener")) {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    }

});


/* =====================================================
   YOUTUBE LINK CHECK
   ===================================================== */

const youtubeLinks =
    document.querySelectorAll(
        'a[href*="youtube.com"]'
    );


youtubeLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Opening ITLabX YouTube channel..."
        );

    });

});


/* =====================================================
   ESC KEY - CLOSE MOBILE MENU
   ===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (navbar && menuToggle) {

            navbar.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});


/* =====================================================
   CONSOLE BRANDING
   ===================================================== */

console.log(
    "%cITLabX",
    "font-size: 30px; font-weight: bold;"
);

console.log(
    "%cTechnical Education • Learn • Practice • Build",
    "font-size: 14px;"
);

console.log(
    "%cWindows • Linux • Networking • Cybersecurity • Python",
    "font-size: 12px;"
);