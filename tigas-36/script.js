//soal 1
let nilaiAndi = 78;
if  (nilaiAndi >= 90) {
        console.log('kondisi 1');
}else if (nilaiAndi >= 75){
        console.log('kondisi 2');
}else if (nilaiAndi >= 60){
        console.log('kondisi 3');
}



//soal 2
let password = 'admin123';
let confirmPassword = password =  'admin123' ? 'login berhasil' : 'login gagal';


//soal 3
let hari = 2; 

switch (hari) {
  case 1:
    console.log("Senin");
    break;

  case 2:
    console.log("Selasa");
    break;

  case 3:
    console.log("Rabu");
    break;

  default:
    console.log("Hari tidak valid");
}


//soal 4
let user = "admin";

switch (user) {
  case 'admin' :
    console.log("admin");
    break;

  case  'akses penuh' :
    console.log("akses penuh");
    break;

  case 'user':
    console.log("user");
    break;

  case 'akses terbatas':
    console.log("akses terbatas");
    break;

  default:
    console.log("tidak dikenali");
}



//soal 5
let umur = 20;
let umurDewasa = umur > 18 ? 'Anda sudah dewasa' : 'Anda masih anak-anak';
console.log(umurDewasa);



//soal 6
let isLogin = true;
let loginInfo = isLogin ? 'selamat datang' : 'silahkan login';



// soal 7
let minimalNilaiA = 90;
let minimalNilaiB = 75;
let minimalNilaiC = 60;

let nilaiBudi = 81;
 
let hasilUjianAndi = nilaiBudi >= minimalNilaiA ? 'A' :
        nilaiBudi >= minimalNilaiB ? 'B' :
        nilaiBudi >= minimalNilaiC ? 'C' : 'D';
console.log(hasilUjianAndi);



//soal 8
let minimalBelanja1 = 100000;
let minimalBelanja2 = 50000;

let belanjaanIbu = 75000;

let diskon = belanjaanIbu >= minimalBelanja1 ? 'diskon 20%' :
        belanjaanIbu >= minimalBelanja2 ? 'diskon 10%' : 'tidak dapat diskon';
console.log(diskon);


//soal 9
let angka = 7;

if (angka % 2 === 0) {
    console.log("Genap");
} else {
    console.log("Ganjil");
}