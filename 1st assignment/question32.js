"use strict";
//Question no 32
Object.defineProperty(exports, "__esModule", { value: true });
const current_User = ["Uzma", "Hina", "Asma", "Afifa", "Hania"];
const new_User = ["muhammad", "hina", "ayaz", "samar", "uzma"];
function checkUserName(currentUser, newUser) {
    const lowercasedCurrentUser = current_User.map(i => i.toLowerCase());
    for (const newUser of new_User) {
        const lowercasedNameUser = newUser.toLowerCase();
        if (lowercasedCurrentUser.includes(lowercasedNameUser)) {
            console.log(`Username "${newUser}" is alredy taken.
        Please enter a new username`);
        }
        else {
            console.log(`Username "${newUser}" is available`);
        }
    }
}
checkUserName(current_User, new_User);
