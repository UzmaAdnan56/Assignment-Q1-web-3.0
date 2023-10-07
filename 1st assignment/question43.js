"use strict";
// Question 43
Object.defineProperty(exports, "__esModule", { value: true });
const magicianNames = ["Sir John", "Herry Porter", "Ron Wasely", "Mickey Peter", "David"];
function show_magicians(magicians) {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
const greatMagicianNames = make_great(magicianNames);
console.log("Origional Magicians");
show_magicians(magicianNames);
console.log("\nGreat Magicians");
show_magicians(greatMagicianNames);
