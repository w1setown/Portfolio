let lastScrollTop = 0;
const kontakt = document.querySelector('.kontakt');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling ned
        kontakt.style.bottom = '-100px'; // skjul kontakt
        kontakt.classList.add('hide');
    } else {
        // Scrolling op
        kontakt.style.bottom = '0'; // vis kontakt
        kontakt.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
});
