AOS.init({
    duration: 1000,
    once: true,
  });



let slideIndex = 1;
let slideInterval;

// Panggil showSlides pertama kali
showSlides(slideIndex);
startAutoSlide();

function startAutoSlide() {
  // Hentikan interval yang mungkin sedang berjalan, lalu mulai yang baru
  stopAutoSlide(); 
  // Atur interval agar setiap 3 detik memanggil fungsi plusSlides(1)
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 3000); 
}

function stopAutoSlide() {
  // Hentikan interval yang tersimpan di slideInterval
  clearInterval(slideInterval);
}

// Navigasi otomatis dan manual
function plusSlides(n) {
  stopAutoSlide(); // Hentikan auto slide saat navigasi manual dilakukan
  showSlides(slideIndex += n);
  startAutoSlide(); // Mulai lagi auto slide setelah navigasi
}

function currentSlide(n) {
  stopAutoSlide(); // Hentikan auto slide saat navigasi manual dilakukan
  showSlides(slideIndex = n);
  startAutoSlide(); // Mulai lagi auto slide setelah navigasi
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Logika perulangan yang benar
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}