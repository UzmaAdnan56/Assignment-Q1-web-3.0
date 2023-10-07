// Question 43

const magicianNames:string[] = ["Sir John","Herry Porter","Ron Wasely","Mickey Peter","David"];

function show_magicians(magicians:string[]):void{
    for(let i = 0; i < magicianNames.length; i++){
    console.log(magicianNames[i])
}
}

function make_great(magicians:string[]):string[]{
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
const greatMagicianNames:string[] = make_great(magicianNames);
console.log("Origional Magicians");
show_magicians(magicianNames);

console.log("\nGreat Magicians");
show_magicians(greatMagicianNames);