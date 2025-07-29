const clockElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const locationEl = document.getElementById('location');

let selectedTimezone = 7; // WIB default
let selectedCity = 'Jakarta'; // Kota default
const timezones = {
  "Jakarta": 7,
  "London": 0,
  "New York": -4,
  "Tokyo": 9,
  "Dubai": 4
};

// Ambil dari localStorage kalau ada
const storedTz = localStorage.getItem('selectedTimezone');
const storedCity = localStorage.getItem('selectedCity');
if (storedTz !== null && storedCity !== null) {
  selectedTimezone = parseInt(storedTz);
  selectedCity = storedCity;

  const offsetLabel = selectedTimezone >= 0 ? `UTC+${selectedTimezone}` : `UTC${selectedTimezone}`;
  if (locationEl) locationEl.textContent = `📍 ${selectedCity} | ${offsetLabel}`; // separator sudah diganti
}

// Tampilkan nama kota (inisialisasi awal)
const offsetLabel = selectedTimezone >= 0 ? `UTC+${selectedTimezone}` : `UTC${selectedTimezone}`;
if (locationEl) locationEl.textContent = `📍 ${selectedCity} | ${offsetLabel}`;

// Event listener untuk setiap tombol kota
document.querySelectorAll('#dropdownMenuWkt button').forEach(btn => {
  btn.addEventListener('click', () => {
    const city = btn.dataset.city;
    selectedTimezone = timezones[city];
    selectedCity = city;
    localStorage.setItem('selectedTimezone', selectedTimezone);
    localStorage.setItem('selectedCity', selectedCity);

    const offsetLabel = selectedTimezone >= 0 ? `UTC+${selectedTimezone}` : `UTC${selectedTimezone}`;
    if (locationEl) locationEl.textContent = `📍 ${selectedCity} | ${offsetLabel}`;

    updateClock();
  });
});

let is24Hour = true;
let showSeconds = true;

// Cek preferensi user dari localStorage
const savedFormat = localStorage.getItem('is24Hour');
if (savedFormat !== null) {
  is24Hour = savedFormat === 'true';
}
const savedShowSeconds = localStorage.getItem('showSeconds');
if (savedShowSeconds !== null) {
  showSeconds = savedShowSeconds === 'true';
}

// Hanya jalankan updateClock jika elemen jam ada
function updateClock() {
  if (!clockElement) return;

  // Ambil UTC waktu sekarang
  const local = new Date();
  const utc = local.getTime() + local.getTimezoneOffset() * 60000;

  // logika timezone sederhana
  const now = new Date(utc + selectedTimezone * 3600000);
  let jam = now.getHours();
  let menit = now.getMinutes();
  let detik = now.getSeconds();

  if (!is24Hour) {
    jam = jam % 12 || 12;
  }

  const offsetLabel = selectedTimezone >= 0 ? `UTC+${selectedTimezone}` : `UTC${selectedTimezone}`;
  if (locationEl) locationEl.textContent = `📍 ${selectedCity} | ${offsetLabel}`; // separator sudah diganti

  // Update masing-masing elemen
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const secondsWrapper = document.getElementById('secondsWrapper');
  const ampmEl = document.getElementById('ampm');

  if (hoursEl) hoursEl.textContent = jam.toString().padStart(2, '0');
  if (minutesEl) minutesEl.textContent = menit.toString().padStart(2, '0');
  if (secondsEl) secondsEl.textContent = detik.toString().padStart(2, '0');
  if (secondsWrapper) secondsWrapper.style.display = showSeconds ? 'inline' : 'none';

  let ampm = '';
  if (!is24Hour) {
    ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  }
  if (ampmEl) ampmEl.textContent = ampm;

  // Tanggal
  if (dateElement) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const hariSekarang = days[now.getDay()];
    const tanggal = now.getDate();
    const BulanSekarang = months[now.getMonth()];
    const tahun = now.getFullYear();
    const formatTanggal = `${hariSekarang}, ${tanggal} ${BulanSekarang} ${tahun}`;
    dateElement.textContent = formatTanggal;
  }
}

if (clockElement) {
  setInterval(updateClock, 1000);
  updateClock();
}

// dropdown Waktu(wib/wita/wit)
const dropdownBtn = document.getElementById('dropdownBtnWkt');
const dropdownMenu = document.getElementById('dropdownMenuWkt');

if (dropdownBtn && dropdownMenu) {
  dropdownBtn.addEventListener('click', () => {
    dropdownMenu.style.display =
      dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function (e) {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
}

// === Auto Terapkan Mode dari localStorage ===
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  const modeToggle = document.getElementById('modeToggle');
  if (modeToggle) modeToggle.textContent = 'Mode';
}

// === Tombol Toggle Mode (jika ada di halaman) ===
const modeToggle = document.getElementById('modeToggle');
if (modeToggle) {
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      modeToggle.textContent = 'Mode';
    } else {
      localStorage.setItem('theme', 'dark');
      modeToggle.textContent = 'Mode';
    }
  });
}

const settingsBtn = document.querySelector('.dropdownBtnSet');
const settingsMenu = document.getElementById('dropdownMenuSet');
if (settingsBtn && settingsMenu) {
  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsMenu.style.display =
      settingsMenu.style.display === 'block' ? 'none' : 'block';
  });
}

// Tombol toggle format jam
const toggleFormatBtn = document.getElementById('toggleFormat');
if (toggleFormatBtn) {
  toggleFormatBtn.textContent = `Ganti Format Jam (${is24Hour ? '24' : '12'} Jam)`;
  toggleFormatBtn.addEventListener('click', () => {
    is24Hour = !is24Hour;
    localStorage.setItem('is24Hour', is24Hour);
    toggleFormatBtn.textContent = `Ganti Format Jam (${is24Hour ? '24' : '12'} Jam)`;
  });
}

// Tombol toggle detik
const toggleSecondsBtn = document.getElementById('toggleSeconds');
if (toggleSecondsBtn) {
  toggleSecondsBtn.textContent = `Tampilkan Detik: ${showSeconds ? 'Aktif' : 'Nonaktif'}`;
  toggleSecondsBtn.addEventListener('click', () => {
    showSeconds = !showSeconds;
    localStorage.setItem('showSeconds', showSeconds);
    toggleSecondsBtn.textContent = `Tampilkan Detik: ${showSeconds ? 'Aktif' : 'Nonaktif'}`;
    const secondsWrapper = document.getElementById('secondsWrapper');
    if (secondsWrapper) secondsWrapper.style.display = showSeconds ? 'inline' : 'none';
  });
}

// Tombol reset mode
const resetModeBtn = document.getElementById('resetMode');
if (resetModeBtn) {
  resetModeBtn.addEventListener('click', () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
    if (modeToggle) modeToggle.textContent = 'Light Mode';
  });
}
const quotes = [
  "Keberhasilan bukanlah milik orang yang pintar. Keberhasilan adalah kepunyaan mereka yang senantiasa berusaha.",
  "Belajarlah mengucap syukur dari hal-hal baik di hidupmu. Belajarlah menjadi kuat dari hal-hal buruk di hidupmu.",
  "Apabila kamu sudah memutuskan menekuni suatu bidang. Jadilah orang yang konsisten. Itu adalah kunci keberhasilan yang sebenarnya.",
  "Bagi para calon sarjana, silakan merenungkan sendiri langkah yang akan ditempuh agar bisa bersinergi positif dalam kehidupan.",
  "Kegagalan hanya terjadi bila kita menyerah.",
  "Ketika muda kita habisi dengan bermalas-malasan, maka tua juga akan malas-malasan lalu tak terasa besok mati. Namun kalau kita banyak belajar dan banyak analisis maka saat dia tua dia menang.",
  "Kalau bukan anak bangsa ini yang membangun bangsanya, siapa lagi? Jangan saudara mengharapkan orang lain yang datang membangun bangsa kita.",
  "Jadilah anak muda yang produktif, sehingga menjadi pribadi yang profesional dengan tidak melupakan dua hal yaitu iman dan takwa.",
  "Pembangunan bangsa Indonesia itu harus seperti dua sayap pesawat terbang. Sayap sebelah kanan adalah iman dan taqwa kepada Tuhan. Sayap sebelah kiri adalah pembangunan teknologi dan ilmu pengetahuan.",
  "Tidak ada gunanya IQ Anda tinggi, tetapi malas dan tidak miliki disiplin. Yang terpenting adalah Anda sehat dan mau berkorban untuk masa depan yang cerah.",
  "Kualitas sumber daya manusia merupakan kunci keberhasilan masa depan bangsa. SDM yang unggul dan berdaya saing akan mengantar Indonesia sejajar dan disegani bangsa lain.",
  "Kita tidak boleh lelah dan kita tidak boleh kalah. Masa depan Indonesia berada di anak muda. Anak muda harus dituntun ke arah positif."
];

let quoteIndex = 0;
const quoteEl = document.getElementById('quote');
const container = document.querySelector('.quote-container');

function updateQuote() {
  quoteEl.style.animation = 'none'; // reset animasi
  void quoteEl.offsetWidth;         // trigger reflow
  quoteEl.style.animation = 'scrollText 10s linear forwards';

  quoteEl.textContent = `“${quotes[quoteIndex]}” – B.J. Habibie`;
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

updateQuote(); // tampil pertama
setInterval(updateQuote, 10000); // ganti tiap 10 detik