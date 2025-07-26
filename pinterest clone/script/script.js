// Array nama hari dan bulan
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const bulan = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

// Ambil tanggal sekarang
const today = new Date();
const namaHari = hari[today.getDay()];
const tanggal = today.getDate();
const namaBulan = bulan[today.getMonth()];
const tahun = today.getFullYear();

// Format tanggal
const tanggalLengkap = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}`;

// Tampilkan ke elemen HTML
document.getElementById("tanggal").innerText = tanggalLengkap;

// Layout form upload gambar
const uploadBox = document.getElementById('uploadBox');
const imageInput = document.getElementById('imageInput');
const errorBox = document.getElementById('errorBox');

uploadBox.addEventListener('click', () => {
  imageInput.click();
});

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = function () {
    if (img.width < 200 || img.height < 300) {
      errorBox.style.display = 'block';
    } else {
      errorBox.style.display = 'none';
    }
  };
  img.src = URL.createObjectURL(file);
});

// --- DROPDOWN HANDLER BARU ---

function closeAllDropdowns(except = null) {
  const dropdowns = [
    { id: "notifDropdown" },
    { id: "messageDropdown" },
    { id: "settingDropdown" },
    { id: "dropdownMenu" },
    { id: "options" }
  ];
  dropdowns.forEach(d => {
    if (d.id !== except) {
      const el = document.getElementById(d.id);
      if (el) el.style.display = "none";
    }
  });
}

// Notifikasi (notif-btn)
function toggleDropdownNotif(e) {
  e && e.stopPropagation();
  const dropdown = document.getElementById("notifDropdown");
  const isOpen = dropdown.style.display === "block";
  closeAllDropdowns(isOpen ? null : "notifDropdown");
  dropdown.style.display = isOpen ? "none" : "block";
}

// Dropdown papan (dropdown-input)
function toggleDropdownBoard(e) {
  e && e.stopPropagation();
  const menu = document.getElementById("dropdownMenu");
  const isOpen = menu.style.display === "block";
  closeAllDropdowns(isOpen ? null : "dropdownMenu");
  menu.style.display = isOpen ? "none" : "block";
}

// Message
function toggleMessageDropdown(e) {
  e && e.stopPropagation();
  const dropdown = document.getElementById("messageDropdown");
  const isOpen = dropdown.style.display === "block";
  closeAllDropdowns(isOpen ? null : "messageDropdown");
  dropdown.style.display = isOpen ? "none" : "block";
}

// Setting
function toggleSettingDropdown(e) {
  e && e.stopPropagation();
  const dropdown = document.getElementById("settingDropdown");
  const isOpen = dropdown.style.display === "block";
  closeAllDropdowns(isOpen ? null : "settingDropdown");
  dropdown.style.display = isOpen ? "none" : "block";
}

// Dropdown custom-select (opsi tag)
function toggleOptions(e) {
  e && e.stopPropagation();
  const options = document.getElementById("options");
  const isOpen = options.style.display === "block";
  closeAllDropdowns(isOpen ? null : "options");
  options.style.display = isOpen ? "none" : "block";
}

function selectOption(el) {
  document.querySelector(".select-box").innerText = el.innerText + " ▼";
  closeAllDropdowns();
}

// Tutup semua dropdown jika klik di luar
document.addEventListener("click", function (e) {
  // Jika klik di dalam dropdown atau tombolnya, jangan tutup
  if (
    e.target.closest("#notifDropdown") ||
    e.target.closest(".notif-btn") ||
    e.target.closest("#messageDropdown") ||
    e.target.closest(".messege-btn") ||
    e.target.closest("#settingDropdown") ||
    e.target.closest(".setting-btn") ||
    e.target.closest("#dropdownMenu") ||
    e.target.closest(".dropdown-input") ||
    e.target.closest("#options") ||
    e.target.closest(".select-box")
  ) {
    return;
  }
  closeAllDropdowns();
});

// Filter board pada dropdown papan
function filterBoards() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".board-item");

  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(input) ? "flex" : "none";
  });
}

// --- END DROPDOWN HANDLER BARU ---