document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".container3, .container4, .container5");

    function checkScroll() {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Panggil saat halaman dimuat
});

