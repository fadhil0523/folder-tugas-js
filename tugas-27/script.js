// soal 1

let ipa = 81;
let ips = 91;
let mtk = 91;

if (mtk >= 91 && ipa >= 91 && ips >= 91){
    console.log("andi lulus");
} else {
    console.log("andi tidak lulus");
}

//soal 2

let nilaiIpa = 81;
let nilaiIps = 91;
let nilaiMtk = 91;

if (nilaiMtk >= 91 || nilaiIpa >= 91 || nilaiIps >= 91){
    console.log("andi lulus");
} else {
    console.log("andi tidak lulus");
}

// soal 3

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("anda sudah login");
} else {
    console.log("anda belum login");
}

// soal 4

let nilaiMtkBudi = 85;
let nilaiIpaBudi = 90;

if (nilaiMtkBudi >= 80 && nilaiIpaBudi >= 80) {
    console.log("Budi lulus dengan nilai baik");
} else {
    console.log("Budi tidak lulus atau nilainya kurang baik.");
}

// soal 5

let minimalBelanja = 100000;
let punyaMember = true;

if (punyaMember || minimalBelanja >= 100000) {
    console.log("Anda mendapatkan diskon!");
} else {
    console.log("Maaf, Anda tidak mendapatkan diskon.");
}