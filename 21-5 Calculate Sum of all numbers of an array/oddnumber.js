function getOddNumbersOfAnArray(numbers){
    var oddnumber=[];
  
    for(i=0; i<numbers.length; i++){
        var element=numbers[i];
       

        if( element%2 !==0){
            oddnumber.push(element);
        }
    }
    return oddnumber;
}

var mynumbers=[12,13,16,151,23,21,78,85,48,50];
var result=getOddNumbersOfAnArray(mynumbers);
console.log(result);