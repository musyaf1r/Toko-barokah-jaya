document.querySelectorAll('.pesan-btn').forEach(button => {
    button.addEventListener('click', function() {
        const produk = this.getAttribute('data-nama');
        const pesan = `Halo, saya ingin memesan: ${produk}`;
        const nomor = '6281234567890'; // Ganti dengan nomor WhatsApp-mu
        const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
        window.open(url, '_blank');
    });
});