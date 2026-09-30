// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling untuk Anchor Links (jika ada)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation Sederhana (untuk contact.html)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            alert('Terima kasih! Pesan Anda telah dikirim. (Ini simulasi; integrasikan dengan backend untuk fungsi nyata.)');
            contactForm.reset();
        } else {
            alert('Mohon isi semua field!');
        }
    });
}

// Tutup mobile menu saat link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});// Inisialisasi EmailJS dengan Public Key Anda
(function() {
    emailjs.init("FHY-Q8TkOBnVwfSdE"); // Ganti dengan Public Key dari EmailJS
})();

// Fungsi untuk menangani submit formulir
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Kirim email menggunakan EmailJS
    emailjs.sendForm('service_7o5vlka', 'template_1gdov9f', this)
        .then(function() {
            alert('Terima kasih Pesannya.');
            document.getElementById('contact-form').reset(); // Reset formulir
        }, function(error) {
            alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
            console.log('FAILED...', error);
        });
});