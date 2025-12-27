const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

function initialiseAnimations() {
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
    document.querySelectorAll('.hiddenright').forEach((el) => observer.observe(el));
}
