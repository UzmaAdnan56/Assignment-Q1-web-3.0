"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 40
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
        tracks,
    };
    return album;
}
const album1 = make_album('junoon', 'junoon');
const album2 = make_album('strings', 'Duur', 10);
const album3 = make_album('vitel Signs', 'Aitebar', 12);
console.log(album1);
console.log(album2);
console.log(album3);
