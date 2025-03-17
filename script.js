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

function kirimWhatsApp() {
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return;
    }

    let nomorWhatsApp = "6285240118145"; // Ganti dengan nomor WhatsApp tujuan
    let teksPesan = `Halo, saya ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;

    let url = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${teksPesan}`;
    window.open(url, "_blank");
}
