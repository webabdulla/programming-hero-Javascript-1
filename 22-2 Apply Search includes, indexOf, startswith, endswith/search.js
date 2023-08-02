// var item = "my name is Mirajul islam miraj i live in a village"

// var searchItem = 'miRaj';


// var online = item.toLowerCase().includes(searchItem.toLowerCase());
// console.log(online);

// // console.log(searchItem);



var oneNum = "i love bangLadesh"
var towNum = "loVe";


var wrongNum = oneNum.toUpperCase();
var wrongNum2 = towNum.toUpperCase();

var rightNum = wrongNum.includes(wrongNum2);

console.log(rightNum);


// index of

var myName="my name is mirajul islam miraj"
console.log(myName.indexOf("is"));

if(myName.indexOf("name") !== -1){
    console.log("i am here");
}else{
    console.log("mui ate nai")
}


// starts width 

console.log(myName.startsWith("my"));


// ends width 
console.log(myName.endsWith("is"));