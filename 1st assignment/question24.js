"use strict";
//Question24
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Uzma Adnan";
console.log(name == "Uzma Adnan"); // true
console.log(name != "Uzma Adnan"); // false
let updatedName = name.toLocaleLowerCase();
console.log(name === updatedName); //false
console.log(name != updatedName); // true
let n = 25;
console.log(n == 25); // true
console.log(n === 25); //true
console.log(n != 25); //false
console.log(n < 25); //false
console.log(n > 25); //false
console.log(n >= 25); //true
console.log(n <= 25); //true
let a = 60;
let b = a > 50 || a < 70;
console.log(b); // true
let c = 80;
let d = c > 50 && c < 70;
console.log(d); // false
let arr = ["Pizza", "burger", "sandwich", "snacks"];
console.log(arr[2]);
console.log(arr[4]);
