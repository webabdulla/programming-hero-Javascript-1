// var myInches =12;
// var myFeet = myInches/12;

// console.log(myFeet);

// var dadaInches =144;
// var dadaFeet = dadaInches/12;

// console.log("dada feet :", dadaFeet);


function incheTofeet(inches){
    const feet= inches / 12;
    return feet;
}

const dadaInches= 144;
const dadaFeet = incheTofeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = incheTofeet(nanaInches);

console.log(nanaFeet);