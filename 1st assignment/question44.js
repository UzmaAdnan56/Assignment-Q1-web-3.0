"use strict";
// Question 44
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("  - You ordered an empty sandwich.Please add some items.");
    }
    else {
        items.forEach((item, i) => {
            console.log(` ${i + 1}.${item}`);
        });
    }
    console.log("\n");
}
makeSandwich();
makeSandwich("chiken", "cheese slice", "tomato", "cucumber");
makeSandwich("salad leaf", "mayoonese");
makeSandwich("beef kabab", "butter", "french fries");
