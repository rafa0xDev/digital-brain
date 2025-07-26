/*basic js*/
// contoh untuk display output go console.log
console.log("damn")
console.log("i love lamia")

// window alert
// window.alert("error jing")

// mengubah text content html
document.getElementById("myH1").textContent = "Welcome to my js journey";
document.getElementById("myP").textContent = "dimas kicimpring";

/*variabel=continer that stores value*/ 
// 1. declaration let = x;
// 2.assignment x = 5;
let name = "rahmat" + " ce ples ples";
console.log(name)

let x = 100;
let y = 4;
console.log(x/y);

let age = 20;
if (age >=18) {
    console.log('wes gerang')
}else {
    console.log('iseh jabang bayi')
}

// string (intine podo mbi variable bedane iki iso ditambah neh nama value nng console)
let nama = "budi" ;
let lastname = " javascript";
console.log('your jeneng is ' + nama + lastname)
console.log('lan emailmu rahmatjbwt@entot.com')

/* booleans */
let online = false;
console.log ('bro is online ' + !online);

// aritmatic operator 
let students = 30;
students = students + 6; /* penjumlahan */
students = students - 2; /* pengurangan */
students = students * 2; /* perkalian */
students = students / 2; /* pembagian */
students = students ** 2 /* kuadrat */
students = students % 3 /* modulus/sisa bagi */
students = students = 5; students++; /* increment */
students = students = 6; students-- /* decrement */
console.log(students)

let siswa = 10 ;
let guru = 2;
let total = siswa + guru ;
console.log(siswa +=2)
/* 
    operator precedence
    1. parenthasis ()
    2. exponentiation (**)
    3. multiplication & division & module (%)
    4 addition & subtraction
*/
let result = 6 / 2 ** (2 + 5);
console.log(result)

/* How to accept user input in js😎 */
// 1.ez way = window promt
// 2.pro way = html textbox

// 1. ez way
// contoh
/* let ussername = window.prompt('masukkan username');
// console.log(ussername) */

// 2. pro way
// contoh
let username ;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myInput").value;
    document.getElementById("myP").textContent = "helo bg " + username ;
}

// type converssion = change the datatype of value to anoter (string, Number, Booleans)
// let umur = window.prompt("how old r u?");
// umur = Number(umur);
// umur+=1;
// console.log(umur, typeof umur);

let a = "";
let b = "";
let c = "";

a = Number(a);   // Mengonversi string menjadi number (hasilnya NaN karena "hensem" bukan angka)
b = String(b);   // Tetap string
c = Boolean(c);  // Mengonversi string menjadi boolean (hasilnya true karena string tidak kosong)

console.log(a, typeof a); // Output: NaN 'number'
console.log(b, typeof b); // Output: hensem 'string'
console.log(c, typeof c); // Output: true 'boolean'

// conts = variabl that cant be change
const phi = 3.14159;
let radius;
let circumference;

document.getElementById("tombolS").onclick = function(){
   radius = document.getElementById("myText").value;
   radius = Number(radius);
   if (isNaN(radius) || radius <= 0) {
       document.getElementById("result").textContent = "Please enter a valid radius.";
   } else {
       circumference = 2 * phi * radius;
       document.getElementById("result").textContent = circumference + "cm";
   }
}

// counter program

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countlabel = document.getElementById('countlabel')
let count = 0 ;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

// math program = built-in object that provides a collection of properties and methods
Math.PI
console.log(Math.PI);

let w = 10;
let d = 2 ;
let r = 27;

// r = Math.round(w) re = 3
// r = Math.floor(w) re = 3
// r = Math.ceil(w) re= 4
// r = Math.trunc(w) re = 4
// r = Math.pow(d , w) re= 8
// r = Math.sqrt(w) re = 9 
// r = Math.log(w)
// r = Math.sin(w)
// r = Math.cos(w)
// r = Math.tan(w)
// r = Math.abs(w)
// r = Math.sign(w)
let max = Math.max(w,d,r);
let min = Math.min(w,d,r);
console.log(max)

// random Number generator

const minim = 1;
const maxim = 36;

let random = Math.floor (Math.random( )* (maxim - minim) ) + minim
console.log(random);

// html nmgntr
const generateBtn = document.getElementById("generateBtn");
const randomNumber = document.getElementById("randomNumber");
const minimal = document.getElementById("minimal");
const maximal = document.getElementById("maximal");

let randomNum ;

generateBtn.onclick = function(){
    let minVal = Number(minimal.value);
    let maxVal = Number(maximal.value);
    if (isNaN(minVal) || isNaN(maxVal) || minVal >= maxVal) {
        randomNumber.textContent = "Please enter valid min and max values.";
    } else {
        randomNum = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
        randomNumber.textContent = randomNum;
    }
}

// if statement = fi a condition is true, execute some code if not, do something else

let time = 8 ;

if(time >= 9) {
    console.log("ayo ngoding");
}

else {
    console.log("scroll fesnuk mulu kapan ngoding?");
}

let tuwa = 100;
let hasLicense = true;

if (tuwa >= 18 ){
    console.log("ws cukup umur gawe sim")

    if (hasLicense) {
        console.log("anda boleh ngebut")
    }
    else{
        console.log("anda harus buat SIM dulu")
    }
}
else if( tuwa < 18){
    console.log("anda masih kecil")
}

const myText = document.getElementById("InputTuwa")
const mySubmit = document.getElementById("Submit")
const resultTuwa = document.getElementById("resultTuwa")
let tuwaa;

mySubmit.onclick = function(){
    tuwaa = myText.value;
    tuwaa = Number(tuwaa)

    if (tuwaa >= 100) {
        console.log("Bawuu tanah")
        resultTuwa.textContent = "Bawuu tanah";
    }
    else if (tuwaa == 0){
        console.log("cah bayek utek coli")
        resultTuwa.textContent = "cah bayek utek coli";
    }
    else if (tuwaa >= 18){
        console.log("cucok bgtt ahhhh")
        resultTuwa.textContent = "cucok bgtt ahhhh";
    }
    else if (tuwaa < 0 ){
        console.log("Lahir ae durung jing")
        resultTuwa.textContent = "Lahir ae durung jing";
    }
    else {
        console.log("kudu 18+")
        resultTuwa.textContent = "cah cilik so so an"
    }
}

// checked = property that determines the checked state of an HTML checkbox or radio button element
const myCheckbox = document.getElementById("checkbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubcrt = document.getElementById ("subcrtBtn")
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubcrt.onclick = function (){

    if(myCheckbox.checked){
        subResult.textContent = "you are sabscrept";
    }
    else {
        subResult.textContent = "you are not sascrebt";
    }
    if (visaBtn.checked){
        paymentResult.textContent = "you are paying withvisa";
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent = "you are paying with mastercard";
    }
    else if (paypalBtn.checked){
        paymentResult.textContent = "you are paying with paypal";
    }
}
