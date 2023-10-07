"use strict";
//Question 15
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Mrs. Ali", "Fazeela Khan", "Nazia Shah"];
guestList.push("Saima");
var message = (", Assalam Alaikum you are invited for dinner on coming sunday.");
console.log(guestList);
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i], message);
}
