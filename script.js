const card = document.getElementById('card');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const heartsContainer = document.getElementById('hearts-container');

// Fungsi untuk membuka kartu
function openCard(e) {
    e.stopPropagation();
    card.classList.add('open');
}

// Fungsi untuk menutup kartu
function closeCard(e) {
    e.stopPropagation();
    card.classList.remove('open');
}

openBtn.addEventListener('click', openCard);
closeBtn.addEventListener('click', closeCard);
card.addEventListener('click', () => {
    card.classList.toggle('open');
});

// Membuat efek animasi hati jatuh secara otomatis
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Posisi horizontal acak
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Ukuran hati acak
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    // Kecepatan jatuh acak
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    heartsContainer.appendChild(heart);

    // Hapus elemen setelah animasinya selesai agar memori tidak penuh
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Munculkan hati baru setiap 300 milidetik
setInterval(createHeart, 300);