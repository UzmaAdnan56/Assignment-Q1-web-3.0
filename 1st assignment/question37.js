"use strict";
// Question 37
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(` ${size}, "${message}"`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Hello, Python");
