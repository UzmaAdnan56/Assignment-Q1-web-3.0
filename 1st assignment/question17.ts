
export{};
let guestList = ["Sumara", "Mrs.Ali", "Nazia","Saima"];


 let arr= guestList.shift();
  var message = (`${arr}", Assalam Alaikum i am sorry i can't invite you in dinner."`);
 console.log(message);
 
 let arr1= guestList.shift();
  var message = (`${arr1}", Assalam Alaikum i am sorry i can't invite you in dinner."`);
 console.log(message);

console.log(guestList);



 var message = (", Assalam Alaikum you are invited you in dinner.");
 console.log(guestList)
 for (var i = 0; i<guestList.length; i++){
    
    console.log(guestList[i],message);
 }
 export{}