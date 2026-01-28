// Data types

// Promitive data types - Oddiy, sodda malumot turlari
// Promitive data types - bir ozgaruvchi va bir qiymat
// 1. String - yozuv
// let text = `string text`;
// console.log(text);

// Template literals
// let userName = 'Dilshod';
// let userAge = 14;
// console.log("Foydalanuvchining ismi: " + userName + ", " + "yoshi " + userAge);
// console.log(`Foydalanuvchining ismi: ${userName}, yoshi ${userAge}`);



// 2. Number -sonlar
let number = 1_000_000
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// 3. Boolean - true, false
let bool = false;
// 4. Null - bosh qiymat
let empty = null
console.log(null == 0); //false
// 5. Underfined - qiymat berilmagan ozgaruvchi 
let userName;
console.log(userName); // underfined
// 6. BigInt - Katta sonlar

let example_one = 9007199254740991n + 1n
let example_two = -9007199254740991n + 2n

// Symbol - shifrash, unique qiymatlar uchun
let id = Sumbol('id')

let userInfo = {
    name: "Dilshod",
    [id]: 9999
}

console.log(userInfo[id]);
// Nonprimitive data types - Murakkab malumot turlari
// Nonprimitive data types - 1 ozgaruvchi, 1 nechta qiymatlar
// 8.  Objekt ---> Array, function
// let person = {
//     name: "Dilshod",
//     age: 21,
//     isGrduaded: true,
//     nationality: "uz"
// }

console.table(person)

// Array - list
let cars = ['BMW', 'Cobalt', 'Zil', 'Zaparoj','mers musr']

// Functions

function sayHello() {
    return 'Hello!'
}

console.log(sayHallo());
