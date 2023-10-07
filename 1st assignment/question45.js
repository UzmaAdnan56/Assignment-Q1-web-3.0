"use strict";
// Question 45
Object.defineProperty(exports, "__esModule", { value: true });
function creatCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const myCar = creatCar("Toyota", "Corolla", ["color", "red"], ["optionalFeature", "sunroof"]);
console.log(myCar);
