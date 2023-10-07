//Question no 32

const current_User = ["Uzma","Hina","Asma","Afifa","Hania"];

const new_User = ["muhammad","hina","ayaz","samar","uzma"];

function checkUserName(currentUser:string[],newUser:string[]):void{
  const lowercasedCurrentUser = current_User.map(i =>i.toLowerCase());
  for (const newUser of new_User){
    const lowercasedNameUser = newUser.toLowerCase();
    if(lowercasedCurrentUser.includes(lowercasedNameUser)){
        console.log(`Username "${newUser}" is alredy taken.
        Please enter a new username`);

    }else{
        console.log(`Username "${newUser}" is available`);
    }
  }
}
checkUserName(current_User,new_User)