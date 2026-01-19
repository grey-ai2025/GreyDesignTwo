/* ===========================================
   Grey AI Website - Design 2
   Modern Tech-Forward JavaScript
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initProductTabs();
    initMobileMenu();
    initSmoothScroll();
});

/* ===========================================
   Theme Toggle
   =========================================== */
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const savedTheme = localStorage.getItem('greyai-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.body.classList.add('light-mode');
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('greyai-theme', isLight ? 'light' : 'dark');
    });
}

/* ===========================================
   Product Tabs
   =========================================== */
function initProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length === 0) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });
}

/* ===========================================
   Mobile Menu
   =========================================== */
let menuOpen = false;

function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menuOpen = !menuOpen;
        toggle.classList.toggle('active', menuOpen);
        menu.classList.toggle('mobile-open', menuOpen);
        document.body.classList.toggle('menu-open', menuOpen);
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuOpen) {
                menuOpen = false;
                toggle.classList.remove('active');
                menu.classList.remove('mobile-open');
                document.body.classList.remove('menu-open');
            }
        });
    });
}

/* ===========================================
   Smooth Scroll
   =========================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===========================================
   Logo Carousel Pause on Hover
   =========================================== */
const logosTrack = document.querySelector('.logos-track');
if (logosTrack) {
    const wrapper = logosTrack.parentElement;
    wrapper.addEventListener('mouseenter', () => {
        logosTrack.style.animationPlayState = 'paused';
    });
    wrapper.addEventListener('mouseleave', () => {
        logosTrack.style.animationPlayState = 'running';
    });
}
