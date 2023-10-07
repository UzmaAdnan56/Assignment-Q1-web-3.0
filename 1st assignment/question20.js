"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 20
let cities = ["Karachi", "Islamabad", "Istambol", "Madina", "Makkah", "Doha"];
let numElements = cities.length;
let matchFound1 = "false";
for (var i = 0; i < numElements; i++) {
    if ("Islamaba" === cities[i]) {
        matchFound1 = "True";
        console.log("It's one of the cleanest citiy");
        break;
    }
}
if (matchFound1 === "false") {
    console.log("It's not on the list");
}
