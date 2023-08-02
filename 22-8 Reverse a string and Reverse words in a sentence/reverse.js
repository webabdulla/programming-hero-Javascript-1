
function stringReverse(number){
    var reverses = '';
    for(var i = number.length-1; i >=0; i--){
        var elements = number[i];
        reverses = reverses + elements;
        console.log(elements,reverses)
    }
    return reverses;
}

var str = 'my name is miraj'
var reversNum = stringReverse(str);
console.log(reversNum);