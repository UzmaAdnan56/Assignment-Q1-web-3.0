"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Sumara", "Mrs.Ali", "Nazia"];
guestList.unshift("Saima");
guestList.splice(2, 0, "Asma");
guestList.push("Fazeela");
var message = (", Assalam Alaikum you are invited for dinner on coming sunday.");
console.log(guestList);
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i], message);
}
