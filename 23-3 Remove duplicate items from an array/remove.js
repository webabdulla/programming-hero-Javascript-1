

 function removeDop(namess){
    var unique = [];
    for(var i=0; i<namess.length; i++){
       var index = namess[i];

    if(unique.includes(index) === false){
        unique.push(index);
    }
 }
 return unique;
}
var names =["babul",'tukul','mukul' ,'tukul','sokul' ,'bokul','babul' ];
var allName = removeDop(names);
console.log(allName);