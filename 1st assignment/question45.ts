// Question 45

function creatCar(manufacturer:string,model:string,...properties:[string,any][]):any{
    const car:any={
        manufacturer,
        model,
    };
    for (const[key,value]of properties){
        car[key]=value;
    }
    return car;
}
    const myCar = creatCar("Toyota","Corolla",["color","red"],
    ["optionalFeature","sunroof"]);
    console.log(myCar)

