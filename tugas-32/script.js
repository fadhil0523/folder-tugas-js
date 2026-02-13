//soal 1

let updateText = document.getElementById('welcomeBox');
console.dir(updateText.textContent);
//update
updateText.textContent = 'belajar DOM menyenangkan';

let studentName = document.getElementById('studentName');
console.dir(studentName.textContent);
//update
studentName.textContent = 'fadhil saadi zahid';



//soal 2
let paragraphElement = document.createElement('p');
document.getElementById('noteArea').appendChild(paragraphElement);
paragraphElement.textContent = 'saya sedang belajar create element';



//soal 3
let gender = document.getElementById('userGender')
console.log(gender.value);



//soal 4
let number = document.getElementById('contactNumber')
console.log(number.value);
number.value =  '08123456789' ;
console.log(number.value);







