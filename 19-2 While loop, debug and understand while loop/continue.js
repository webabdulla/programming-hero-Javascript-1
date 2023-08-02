var numbers =[20,25,30,35,40,45,50];
for( i= 0; i <numbers.length;i++){
    var number = numbers[i];
    if(number > 35){
        continue;
    }
    console.log(number)
}