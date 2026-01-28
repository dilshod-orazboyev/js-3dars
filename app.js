// Data types

// Promitive data types - Oddiy, sodda malumot turlari
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

// Symbol - shifrash
// Nonprimitive data types - Murakkab malumot turlari
// 8.  Objekt
// 9.  Array
// 10. function