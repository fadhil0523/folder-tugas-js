 //soal 1
let a = 1;
while (a <= 10){
    console.log(a);
    a++;
}

//soal 2
let b = 10;

do{
    console.log(b);
    b--;
} while (b >= 1);

//soal 3

for (let c = 2; c <= 20; c += 2){
    console.log(c);
}

//soal 4

for (let d = 1;d <= 10; d++){
    if (d === 5)continue;
    console.log(d);
    
}

//soal 5
for (let e = 1; e <= 10; e++){
    if (e === 6) break;
    console.log(e);
}
