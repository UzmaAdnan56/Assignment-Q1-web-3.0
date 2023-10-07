// Question 31

let userName = ["Admin","Uzam","Hina","Asma","Afifa"]
for (var i = 0; i < userName.length; i++){ 
if (userName[i]=== "Admin"){
console.log(`Hello Admin,would you like to see a status report?`);
}
else {
    console.log(`Hello ${userName[i]},thank you for logging in.`);}
}

let userName1 = [];
if (userName1.length === 0){
    console.log("We need to find some users!")
}