// 1-misol
let age = prompt(`Yoshingizni kiriting:`);

if (age > 50) {
    console.log(`Siz kattasiz`);
}
else {
    console.log(`Siz yoshsiz`);
}

// 2-misol
let narx = +prompt(`somsa narxini kiriting:`);

if (narx  > 3000) {
    console.log(`qimmat`);
}

else {
    console.log(`arzon`);
}

// 3-misol
let parol = prompt(`Parolni kiriting:`);

if (parol == `sarimsoqpiyoz`) {
    console.log(`Assalomu alaykum! Ahvollaringiz yaxshimi?`);
}
else {
    console.log(`Xato!`);
}

// 4-misol

let yosh = prompt(`yoshinigizni kiriting:`);

if (yosh > 0 && yosh < 30) {
    console.log(`siz yoshsiz`);
}
else if (yosh <= 30 && yosh > 60) {
    console.log(`siz kattasiz`);
}
else if (yosh <= 60) {
    console.log(`siz qarisiz`);
}
else {
    console.log(`siz kiritgan yosh 0dan katta 60dan kichik bo'lishi kerak`);
}

// 5-misol

let firstName = prompt(`Ismingizni kiriting:`);

if (firstName == 'Ali') {
    console.log(`Salom o'ga`);
}

else if (firstName == 'Ahmad') {
    console.log(`Ko’rinmayapsan dostim, nima qilyapsan?`);
}
else {
    console.log(`siz kiritgan ism xato`);
}


// 6-misol

let A = +prompt(`A ni kiriting:`);
let B = +prompt(`B ni kiriting:`);


if (A > B) {
  console.log(`>`);
} 
else if (A == B) {
  console.log(`=`);
}
else {
    console.log(`<`);
}




