// day 1
const num = [1, 2, 3, 4, 5];

function filterGanjil(num) {
    const ganjil = num.filter(n => n % 2 !== 0);
    return ganjil;
}

function kaliGanjil(num) {
    return num.filter(n => n % 2 !== 0).map(n => n * 2);
}

console.log(filterGanjil(filterGanjil(num))); // [1, 3, 5]
console.log(kaliGanjil(num));     // [2, 6, 10]

function proses(arr) {
    const ganjil = arr.filter(n => n % 2 !== 0);
    const kali = ganjil.map(n => n * 2);
    return kali
}
console.log(proses(num));

const angka = [1, 2, 3, 4, 5, 6];
function pangkatGenap (arr){
    const genap = arr.filter(angka => angka % 2 === 0);
    const pangkatduwa = genap.map(angka => angka ** 2);
    return pangkatduwa ;
}

console.log(pangkatGenap(angka));

const data = [1, 2, 3, 4, 5];
function statistkGanjil(data) {
    const ganjil = data.filter(angka => angka % 2 !== 0);
    const total = ganjil.reduce((val,acc) => val + acc, 0);

    const rata2 = total / ganjil.length

    return {
        total: total,
        rata2: rata2.toFixed(2)
    }
}

console.log(statistkGanjil(data));

const nilai = [70, 85, 90, 60, 75, 100, 80];
function statistikNilai (data){
    const oal = data.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
    const rataRata = oal / data.length;
    const tertinggi = Math.max(...data);
    const terendah = Math.min(...data);

    return {
        total: oal,
        rataRata: rataRata.toFixed(2),
        tertinggi: tertinggi,
        terendah: terendah
    }
};

console.log(statistikNilai(nilai));

// day 2
const rapot = [81, 91, 88, 85, 87, 87, 90, 89, 90, 82, 87];
function analisaScore (arr){
    const total = arr.reduce((acc,val) => acc + val, 0);
    const average = total / arr.length;
    let predikat ;
    if (average >= 90){
        predikat = "A";
    } else if (average >= 80){
        predikat = "B";
    } else if(average >= 70){
        predikat = "C"
    } else if(average >= 60){
        predikat = "D";
    } else {
        predikat = "E";
    }

    return {
        total: total,
        average: average.toFixed(2),
        predikat: predikat
    }
};

const transaksi = [ 15000000, // Gaji bulan 1
  -3000000, // Sewa kos
  -1500000, // Makan & minum
  -800000,  // Transportasi
  -200000,  // Internet
  16000000, // Gaji bulan 2
  -3200000, // Sewa naik
  -1800000, // Makan & minum
  -1000000, // Belanja kebutuhan pribadi
  -250000,  // Netflix + Spotify
  17000000, // Gaji bulan 3
  -3500000, // Liburan!
  -2000000, // Makan & jajan
  -500000,  // Upgrade mouse + keyboard
];
function analisaKeuangan(arr){
   const gaji = arr.filter(val => val > 0 ).reduce((acc,val) => acc + val, 0);
   const pengeluaran = arr.filter(val => val < 0).reduce((acc,val) => Math.abs(val), 0);
   const saldo = gaji - pengeluaran ;
   
   return {
    gaji: gaji,
    pengeluaran: pengeluaran,
    saldo: saldo
   }
}

console.log(analisaKeuangan(transaksi));

const balance = [15000000, -4000000, 2000000, -2500000];
function laporanKeuangan (arr){
    const pemasukan = arr.filter(val => val > 0).reduce((acc,val) => acc + val, 0);
    const pengeluaran = arr.filter(val => val < 0).reduce((acc, val) =>acc + Math.abs(val),0);
    const saldo = pemasukan - pengeluaran;

    return {
        pemasukan: pemasukan,
        pengeluaran: pengeluaran,
        saldo
    }
};

console.log(laporanKeuangan(balance));

const huruf = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'c'];
function hitungHuruf(arr){
    const hasil = arr.reduce((acc,val) => {
        if(!acc[val]){
            acc[val] = 1
        } else {
            acc[val]++;
        }
        return acc;
    }, {});

    return hasil
}

console.log(hitungHuruf(huruf));

const ongko = [1, 2, 3, 4, 5, 6];
function hitungGanjilGenap (arr){
    const totalGanjil = arr.filter(val => val % 2 !== 0).reduce((acc, val) => acc + val, 0);
    const totalGenap = arr.filter(val => val % 2 === 0).reduce((acc, val) => acc + val, 0);

    return {
        totalGanjil: totalGanjil,
        totalGenap: totalGenap
    }
};

console.log(hitungGanjilGenap(ongko));

const numero = [12, 7, 25, 18, 30, 5, 10];
function hitungStatistik (arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const total = arr.reduce((acc,val) => acc + val , 0);
    const avg = total / arr.length;

    return {
        min : min,
        max : max,
        avg : avg.toFixed(2)
    }
}

console.log(hitungStatistik(numero));

// day 3
const randNums = [3, 8, 15, 22, 7, 10, 5, 6];
function isOdd (arr){
    const filter = arr.filter(num => num % 2 !== 0);
    return filter ;
}

console.log(isOdd(randNums));

const namaSiswa = ["Rafa", "Andriana", "Bayu", "Jonathan", "Dita", "Alexandra"];
function hitungPanjangNama (arr){
    const filterNama = arr.filter(nama => nama.length > 5);
    return filterNama;
};

console.log(hitungPanjangNama(namaSiswa));

const namaOrangSukses = ["Rafa", "Andriana", "Bayu", "Jonathan", "Dita", "Alexandra"];
function uppercaseName (arr){
    const filterLebihLima = arr.filter(nama => nama.length > 5);
    const uppercase = filterLebihLima.map(nama => nama.toUpperCase());

    return uppercase;
};

console.log(uppercaseName(namaOrangSukses));

const namaSiswaKece = ["Rafa", "Andriana", "Bayu", "Jonathan", "Dita", "Alexandra"];
function totalHurufNama(arr){
    const totalHuruf = arr.reduce((prev, next) => prev + next.length, 0);
    return totalHuruf;
}

console.log(totalHurufNama(namaSiswaKece));

const siswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Bayu", nilai: 90 },
  { nama: "Dita", nilai: 75 },
  { nama: "Andriana", nilai: 88 },
  { nama: "Jonathan", nilai: 92 }
];

function totalNilai (arr){
    const total = arr.reduce((prev, next) => prev + next.nilai, 0);
    return total;
}
 console.log(totalNilai(siswa));

const namasiswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Bayu", nilai: 90 },
  { nama: "Dita", nilai: 75 },
  { nama: "Andriana", nilai: 88 },
  { nama: "Jonathan", nilai: 92 }
];
function ratarata (arr){
    const ratarata = arr.reduce((prev, next) => prev + next.nilai, 0) / arr.length;
    return ratarata.toFixed(2);
};

console.log(ratarata(namasiswa));

const DataNilaisiswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Bayu", nilai: 55 },
  { nama: "Dita", nilai: 75 },
  { nama: "Andriana", nilai: 40 },
  { nama: "Jonathan", nilai: 92 }
];

function LulusUppercase(arr){
    const siswaLulus = arr.filter(siswa => siswa.nilai >= 70);
    const uppercase = siswaLulus.map(siswa => siswa.nama.toUpperCase());

    return uppercase;
};

console.log(LulusUppercase(DataNilaisiswa));

//day 4 
const randomnumber = [1, 2, 3, 4, 5, 6];
function genapString(arr){
    const filter = arr.map(n => n % 2 === 0 ? "genap" : n );
    return filter
};

console.log(genapString(randomnumber));

function tampilUser ({nama, usia = 0}) {
        console.log(`hallo nama saya ${nama}, usia saya ${usia}`);
};

tampilUser({ nama: "Rafa", usia: 17 });  
// Output: Halo, nama saya Rafa, umur saya 17

tampilUser({ nama: "Bayu" });  
// Output: Halo, nama saya Bayu, umur saya 0

const dataSiswa = [
  { nama: "Rafa", nilai: 85 },
  { nama: "Bayu", nilai: 70 },
  { nama: "Dita", nilai: 60 },
  { nama: "Andi", nilai: 90 }
];

function cekKelulusan(nama, nilai){
    if(nilai >= 75){
        console.log(`${nama} dinyatakan lulus`)
    } else {
        console.log(`${nama} dinyatakan tidak lulus`)
    }
};

dataSiswa.forEach(siswa => cekKelulusan(siswa.nama, siswa.nilai));

const keranjang = [
  { nama: "keyboard", harga: 150000 },
  { nama: "monitor", harga: 1000000 },
  { nama: "mouse", harga: 80000 },
  { nama: "headset", harga: 200000 }
];
function cariMouse(data){
    const cariMouse = data.find(item => item.nama === "mouse");
    if(cariMouse){
        console.log(`item ${cariMouse.nama} ditemukan dengan harga ${cariMouse.harga}`);
    } else {
        console.log("item tidak ditemukan");
    }
};
cariMouse(keranjang);

// day 5 belajar dasar
// soal 1
let nama = "rafa";
let umur = 17;
let isSiswa = true;

console.log(nama, umur, isSiswa);
// soal 2
let angka1 = 10;
let angka2 = 7;
console.log(angka1 + angka2);

if(angka1 > angka2){
    console.log(angka1 + " lebih besar dari " + angka2);
} else {
    console.log(angka1 + "tidak lebih besar dari" + angka2);
};

if(angka1 % angka2){
    console.log("tidak habis dibagi");
} else {
    console.log("habis dibagi")
};
// soal 3
let belajar = true;
let ngantuk = false;
console.log(belajar || ngantuk);
console.log(belajar && ngantuk);

// tantangan 1
let jeneng = "Arka";
let tuwaa = 16;
let statusSiswa = true;
console.log(`Hello namaku ${jeneng}. Saya berusia ${tuwaa}. Status saya: siswa = ${statusSiswa}`)

// tantangan 2
let umurAnak = 16;
if(umurAnak > 12 && umurAnak < 20){
    console.log("banjindul ws iso ngaceng");
} else {
    console.log("bayekk")
};
// tantangan 3
let nilai1 = 86;
let nilai2 = 90;
let rotoroto = (nilai1 + nilai2) / 2;
if(rotoroto >= 75){
    console.log("lulus");
} else {
    console.log("balen kelas deng");
};

// day 6
let namo = "alok";
let oemoer = 17;
let status = true;
let hasil = `hallo, nama saya ${namo}, umur saya ${oemoer}, status pelajar : ${status}`;
console.log(hasil);
let kapan20 = 20 - oemoer;
console.log(kapan20);

let nilaiUjian = 90;
if(nilaiUjian >= 75){
    console.log("senengggg, lulus og")
} else {
    console.log("sinau neh jon!")
}

let nilaiUjian2 = 89;
if(nilaiUjian2 >= 90){
    console.log("Calon profesor nek iki");
} else if(nilaiUjian2 >= 80 && nilaiUjian2 < 90){
    console.log("iso iki munggah neh");
} else if(nilaiUjian2 >= 70 && nilaiUjian2 < 80){
    console.log("ok lahh, sng sregep ngunu loo");
} else if(nilaiUjian2 < 70){
    console.log("walah walah, ngene ko pengen banggakke wong tuo");
};

let dinoo = "jum'at";
switch(dinoo){
    case "senin":
        console.log("cokk senin");
        break
    case "rabu":
        console.log("walah ws tengahan");
        break
    case "jum'at":
        console.log("asikk moleh gasik");
        break
    case "sabtu":
        console.log("asikk juuu");
        break
    case "minggu":
        console.log("wayae skill e dislenger/diasah");
        break
    default:
        console.log("lakoni ae bolo jenenge wong urepp")
};

for (let i = 0; i <= 6; i++) {
    console.log(`sinau sregep day ${i}`);
};

// day 7
function segitigaAngka(tinggi){
    for(let i = 1; i <= tinggi; i++){
        let baris = ''
        for(let j = 1; j <= i; j++){
            baris += j + ''
        };
        console.log(baris)
    };
};
segitigaAngka(4);

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
};

for (let i = 1; i <= 10; i++) {
    console.log(i)
};

for (let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i)
    };
};

for (let i = 10; i >= 1; i--){
    console.log(i)
}

function segitigaBintangUp(tinggi){
    for(let i = 1; i <= tinggi; i++){
        let baris = '';
        for(let j = 1; j <= i; j++){
            baris += '*'
        }
        console.log(baris)
    }
}

segitigaBintangUp(5)

function segitigaBintangDown(tinggi){
    for(let i = 1; i <= tinggi; i++){
        let baris = '';
        for(let j = 1; j <= tinggi - i; j++){
            baris += "*"
        }
        console.log(baris)
    };
};

segitigaBintangDown(5);

function bintangKotak(tinggi){
    for(let o = 1; o <= tinggi; o++){
        let baris = '';
        for(let i = 1; i <= tinggi; i++){
            baris += '*'
        };
        console.log(baris)
    };
}
bintangKotak(5);

function segitigaKanan(tinggi){
    for(let i = 1; i <= tinggi; i++){
        let baris = '';
        for(let spasi = tinggi - i; spasi > 0; spasi--){
            baris += ' '
        }
    }
};
segitigaKanan(4);

// day 8 
const dataset = [5, 8, 11, 3, 9];
function newDataSet(data){
    const kalidua = data.map(n => n * 2);
    const lebihEnam = kalidua.filter(n => n > 6);
    lebihEnam.forEach(n => console.log(n));
};
newDataSet(dataset);

const asma = ["Aldi", "Rina", "Arka", "Dani", "Rafa"];
function asmalimo (data) {
    const filterLimo = data.filter(j => j.length > 3);
    const limoocilik = filterLimo.map(j => j.toLowerCase());
    console.log(limoocilik);
};
asmalimo(asma);

const produk = [
  { nama: "Laptop", harga: 7000000 },
  { nama: "Mouse", harga: 80000 },
  { nama: "Keyboard", harga: 200000 },
  { nama: "Monitor", harga: 1500000 },
  { nama: "Flashdisk", harga: 60000 }
];
function underSejuta(data){
    const filterUnderJuta = data.filter(item => item.harga < 1000000);
    if(filterUnderJuta.length > 0){
        filterUnderJuta.forEach(item => {
            console.log(`item ${item.nama} dengan harga ${item.harga} kurang dari 1 juta`);
        });
    } else {
        console.log('item tidak ditemukan')
    }
};
underSejuta(produk);

const setUp = [
  { nama: "Laptop", harga: 7000000, kategori: "elektronik" },
  { nama: "Mouse", harga: 80000, kategori: "elektronik" },
  { nama: "Kemeja", harga: 150000, kategori: "pakaian" },
  { nama: "Keyboard", harga: 200000, kategori: "elektronik" },
  { nama: "Celana", harga: 175000, kategori: "pakaian" },
  { nama: "Monitor", harga: 1500000, kategori: "elektronik" }
];
function filterKategori(data, kategori){
    const filterElektronik = data.filter(item => item.kategori === kategori);
    const totalHargaKategori = filterElektronik.reduce((prev, next) => prev + next.harga, 0);
    if(filterElektronik.length > 0){
        filterElektronik.forEach(item => {
            console.log(`item ${item.nama} dengan harga ${item.harga} dan kategori ${item.kategori} total harga = ${totalHargaKategori}`)
        });
    };
};
filterKategori(setUp, "elektronik");

function hitungDiskon(harga, persen){
    const diskonFee = harga * (1 - persen / 100);
    return diskonFee
};
hitungDiskon(200000, 25)

function lulusGaYaa (nilai) {
    if(nilai >= 75){
        return  'Hoki lu tong';
    }else {
        return  'diperpanjang atau tidak diperpanjang?DIPERPANJANG'
    }
};
console.log(lulusGaYaa(90));

function ambilLulus (arr){
    const filterLulus = arr.filter(n => n >= 75);
    return filterLulus;
};
console.log(ambilLulus([90, 60, 85, 70, 75]));

function segitiga(n){
    for(let i =1; i <= n; i++){
        console.log("*".repeat(i));
    }; 
};
segitiga(5);

function segitigamemek(n){
    for (let i = 1; i <= n; i++) {
        let baris = '';
        for (let j = 1; j <= i; j++) {
            baris += "*"
        }
        console.log(baris);
    }
};
segitigamemek(5);

function segitigaKanan(n) {
  for (let i = 1; i <= n; i++) {
    let baris = '';

    // 👉 Tambahkan spasi sebanyak (n - i)
    for (let spasi = 1; spasi <= n - i; spasi++) {
      baris += ' ';
    }

    // 👉 Tambahkan bintang sebanyak i
    for (let bintang = 1; bintang <= i; bintang++) {
      baris += '*';
    }

    // Cetak hasil baris
    console.log(baris);
  }
}
segitigaKanan(5);

for (let i = 1; i <= 3; i++){
    console.log(`hello rafa`);
};

for(let i = 5; i >= 1; i--){
    console.log(i);
};

for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0){
        console.log(i);
    };
};

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    };
};

function kotakAmba(n){
    for(let i = 1; i <= n; i++){
        let baris = '';
        for(let j = 1; j <= n; j++){
            baris += "*";
        };
        console.log(baris)
    };
};

kotakAmba(3);

function kotakBintang(n, m){
    for(let i = 1; i <= n; i++){
        let baris = '';
        for(let j = 1; j <= m; j++){
            baris += "*";
        };
        console.log(baris);
    };
};
kotakBintang(2,4);

function kotakAngka(n, m){
    let angka = 1
    for(let i = 1; i <= n; i++){
        let baris = '';
        for(let j = 1; j <= m; j++){
            baris += angka + "";
            angka++;
        };
        console.log(baris);
    };
};
kotakAngka(2,2);

// day ? yaudah tinggal latihan aja ga usah mikirin hari
// membuat program kalkulator sederhana
 function kalkulator(a, b, operator){
    switch(operator){
        case "+" :
            return a + b;
            
        case "-" :
            return a - b;
          
        case "*" :
            return a * b;
          
        case "/" :
           if(b === 0){
            return "error cannot divide by zero"
           };
           return a / b;

        case "^" :
            return Math.pow(a, b);

        default :
            return "Operator tidak valid";
    };
 };

 console.log(kalkulator(4, 0, "/"));

 function cuacahariIni (hari) {
    switch (hari) {
        case "senin"    :
        case "selasa"   :
        case "rabu"     :
            return "Hari Kerja jangan, lupa payung!";
        
        case "sabtu"    :
        case "minggu"   :
            return "Hari Libur, Santai saja!";

        default :
            return "Hari tidak valid";

    };
 };
 console.log(cuacahariIni("minggu"));

 function penilaian(nilai) {
    switch(true) {
        case (nilai >= 90 && nilai <= 100):
            return "walah walah ngene po ra idaman";
        case (nilai >= 80 && nilai <= 89):
            return "Mantepp lanjutkan bos mudaa";
        case (nilai >= 70 && nilai <= 79):
            return "mayan, sinau sregep auto A";
        case (nilai >= 60 && nilai <= 69):
            return "sinau boss";
        
        default : 
            return "ra umom";
    };
 };

 console.log(penilaian(95)); // Sangat Baik
console.log(penilaian(83)); // Baik
console.log(penilaian(72)); // Cukup
console.log(penilaian(60)); // Perlu belajar lagi
console.log(penilaian(120)); // Nilai tidak valid

function beliMinuman(kode) {
    switch(kode){
        case "A1" :
            return "Bottle of Tea - Rp5.000"
        case "B2" :
            return "Dark coffee - Rp7.000"
        case "C3" :
            return "Mineral Water - Rp3.000"

        default :
            return "Drinks code did not exist"
    };
};
console.log(beliMinuman("A1")); // Teh Botol - Rp5.000
console.log(beliMinuman("Z9")); // Kode tidak tersedia

// day gas ngoding
function formatNama(nama){
    if(typeof nama !== 'string' || nama.length === 0) {
        return "";
    }
    const namaKecil = nama.toLowerCase();
    const hurufKapitalAwal = namaKecil.charAt(0).toUpperCase();
    const sisaHuruf = namaKecil.slice(1);
    return hurufKapitalAwal + sisaHuruf;
};
console.log(formatNama("rAFA")); // Output: "Rafa"

function sensorKata(kalimat, kata){
    if(typeof kalimat !== 'string' || kalimat.length === 0 || 
        typeof kata !== 'string' || kata.length === 0) {
        return kalimat;
    };
    const kataSensor = '*'.repeat(kata.length);
    const regex = new RegExp(kata, 'gi');
    return kalimat.replace(regex, kataSensor);
};

console.log(sensorKata("Saya belajar JavaScript", "JavaScript"));

let buah = ["apel", "jeruk"];
function tambahBuah(nama, tujuan){
    if(typeof nama !== 'string' || nama.length === 0){
        return "Nama buah tidak valid";
    }
    const kirim = tujuan.push(nama);    
    return kirim;
};
console.log(tambahBuah("pisang", buah)); // Output: 3
console.log(buah); // Output: ["apel", "jeruk", "mangga"]

function hapusBuahAkhir(tujuan){
    const hapusTerakhir = tujuan.pop();
    return hapusTerakhir;
};
console.log(hapusBuahAkhir(buah)); // Output: "pisang"
console.log(buah); // Output: ["apel", "jeruk"];

function hapusBuahAwal(tujuan){
    const hapusPertama = tujuan.shift();
    return hapusPertama;
};
console.log(hapusBuahAwal(buah)); // Output: "apel"
console.log(buah); // Output: ["jeruk"]

let kata = ["aku", "suka", "koding"];
function gabungKata(kata){
    const gabung = kata.join(' ');
    return gabung;
}

console.log(gabungKata(kata)); // Output: "aku suka koding"

let kalimat = "belajar,js,itu,seru";
function pisahKata(kalimat){
    if(typeof kalimat !== 'string' || kalimat.length === 0) {
        return [];
    }
    const pisah = kalimat.split(',');
    return pisah;
};
console.log(pisahKata(kalimat)); // Output: ["belajar", "js", "itu", "seru"];

function hitungRataRata(arr){
    if(!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }
    const total = arr.reduce((prev, next) => prev + next, 0);
    const rataRata = total / arr.length;
    return rataRata;
}

console.log(hitungRataRata([10, 20, 30])) // hasil: 20

function nilaiTertinggi(arr){
    if(!Array.isArray(arr) || arr.length ===0){
        return null;
    }
    const tertinggi = arr.reduce((prev, next) => Math.max(prev, next), arr[0]);
    return tertinggi;
};
console.log(nilaiTertinggi([7, 3, 12, 5])) // hasil: 12

function even (arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return [];
    }
    const filter = arr.filter(n => n % 2 === 0);
    return filter;
}
console.log(even([1, 2, 3, 4, 5, 6])) // hasil: [2, 4, 6]

// mangkat
const siswaa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 72 },
  { nama: "Cici", nilai: 90 },
  { nama: "Deni", nilai: 60 },
  { nama: "Eka", nilai: 78 }
];
function filterLulus(siswa){
    const lulus = siswa.filter(s => s.nilai >= 75);
    const jumlahLulus = lulus.length;
    const tidaklulus = siswa.filter(s => s.nilai < 75);
    const jumlahTidakLulus = tidaklulus.length;
    const namaSiswaTidakLulus = tidaklulus.map(s => s.nama);
    return {
        jumlahLulus: jumlahLulus,
        jumlahTidakLulus: jumlahTidakLulus,
        namaSiswaTidakLulus: namaSiswaTidakLulus
    };
}
console.log(filterLulus(siswaa));

function hasilbelajar(siswa){
    const totalNilai = siswa.reduce((prev, next) => prev + next.nilai, 0);
    const rataRata = totalNilai / siswa.length;

    return {
        totalNilai : totalNilai,
        rataRata: rataRata.toFixed(2),
    }
}

console.log(hasilbelajar(siswaa));

function gateLulus(siswa){
   const lulus = siswa.filter(s => s.nilai >= 75);
   const tidakLulus = siswa.filter(s => s.nilai < 75);

   return {
         lulus: lulus,
         tidakLulus: tidakLulus
   }
}
console.log(gateLulus(siswaa));
// Output:
// {
//   lulus: [
//     { nama: "Andi", nilai: 85 },
//     { nama: "Cici", nilai: 90 },
//     { nama: "Eka", nilai: 78 }
//   ],
//   tidakLulus: [
//     { nama: "Budi", nilai: 72 },
//     { nama: "Deni", nilai: 60 }
//   ]
// }

const biji = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 75 },
  { nama: "Fahmi", nilai: 82 },
];

function displayNilai(arr){
    const toString = arr.map(siswa => {
        return `${siswa.nama} : ${siswa.nilai}`;
    })
    const hasil = toString.join(', ');
    return hasil;
};

console.log(displayNilai(biji)); // Output: "Rafa : 90, Dina : 75, Fahmi : 82"

function displayLapanPuluh(arr){
    const filter = arr.filter(s => s.nilai >= 80);
    const toString = filter.map(s => s.nama + " : " + s.nilai).join(', ');
    return toString;
}
console.log(displayLapanPuluh(biji)); // Output: "Rafa : 90, Fahmi : 82"

function toPredikat(arr){
    const predikat = arr.map(s => {
        if(s.nilai >= 90){
            return s.nama + " : A";
        }
        else if(s.nilai >= 80){
            return s.nama + " : B";
        }
        else if(s.nilai >= 70){
            return s.nama + " : C";
        }
        else if(s.nilai >= 60){
            return s.nama + " : D";
        } else {
            return s.nama + " : E";
        }
    })
    return predikat.join(', ');
};
console.log(toPredikat(biji)); // Output: "Rafa : A, Dina : C, Fahmi : B"

const ndog = [80, 75, 90, 85];
function avgval(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return 0;
    }
    const total = arr.reduce((prev, next) => prev + next, 0);
    const ratarata = total / arr.length;
    return ratarata.toFixed(2);
}
console.log(avgval(ndog)); // Output: 82.50

const siswoyo = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 75 },
  { nama: "Fahmi", nilai: 82 },
];
function cariLebihLapan(arr){
    const siswa = arr.find(s => s.nilai >= 80);
    if(siswa){
       return `${siswa.nama} : ${siswa.nilai}`;
    } else {
        return "Tidak ada siswa dengan nilai >= 80";
    }
}
console.log(cariLebihLapan(siswoyo)); // Output: "Rafa : 90"

function urutkanNilai(arr){
    const urut = arr.sort((a, b) => a.nilai - b.nilai);
    const hasil = urut.map(s => s.nama + " : " + s.nilai).join(', ');
    return hasil;
}
console.log(urutkanNilai(siswoyo)); // Output: "Dina : 75, Fahmi : 82, Rafa : 90"

const Nilaimurid = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 75 },
  { nama: "Fahmi", nilai: 82 }
];

function nilaiTertinggi(arr){
    const tertinggi = arr.reduce((prev, next) => {
        return prev.nilai > next.nilai ? prev : next
    })
    return `${tertinggi.nama} : ${tertinggi.nilai}`;
}

function avgNilai(arr){
    const total = arr.reduce((prev, next) => prev + next.nilai, 0);
    const rataRata = total / arr.length;
    return rataRata.toFixed(2); 
}

function lebihLapan(arr){
    const filter = arr.filter(s => s.nilai >= 80);
    if(filter){
        return filter.map(s => `${s.nama} : ${s.nilai}`).join(', ');
    } else {
        return`Tidak ada siswa dengan nilai >= 80`;
    }
}

console.log(nilaiTertinggi(Nilaimurid)); // Output: "Rafa : 90"
console.log(avgNilai(Nilaimurid)); // Output: "82.33"
console.log(lebihLapan(Nilaimurid)); // Output: "Rafa : 90"

const ambatukam = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 72 },
  { nama: "Fahmi", nilai: 82 },
  { nama: "Lana", nilai: 60 },
];

function formatHasilUjian(obj){
    const totalNilai = obj.reduce((prev, next) => prev + next.nilai, 0);
    const siswaLulus = obj.filter(s => s.nilai >= 75);
    const siswaTidakLulus = obj.filter(s => s.nilai < 75);

    return{
        totalNilai: totalNilai,
        siswaLulus: siswaLulus.map(s => `${s.nama} : ${s.nilai}`).join(', '),
        siswaTidakLulus: siswaTidakLulus.map(s => `${s.nama} : ${s.nilai}`).join(', ')
    }
}
console.log(formatHasilUjian(ambatukam));

const datanilai = [
  { nama: "Rafa", nilai: 90 },
  { nama: "Dina", nilai: 72 },
  { nama: "Fahmi", nilai: 82 },
  { nama: "Lana", nilai: 60 },
];

function ranking(obj){
    const sorted = obj.sort((a, b) => b.nilai - a.nilai);
    const peringkat = sorted.map((siswa, index) => {
        return `${index + 1}. ${siswa.nama} : ${siswa.nilai}`;
    })
    return peringkat.join('\n');
}

console.log(ranking(datanilai));
