var numbers=[20,25,15,30];

numbers.push(80);

//If you need to add an element to the beginning of your array, use unshift() . If you want to add an element to a particular location of your array, use splice() . And finally, when you want to maintain your original array, you can use the concat() method.
numbers.unshift(100);

//use push to add element to an array as the last element array;


//use pop to get lest elements 
numbers.pop()
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
numbers.shift();
console.log(numbers);