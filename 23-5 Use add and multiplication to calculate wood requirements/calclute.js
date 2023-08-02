function woodClc(table,bed,chair){
  
  var parTable = 4;
  var parBed = 2;
  var parChair = 5;

  var woodtable = parTable*table;
  var woodbad = parBed*bed;
  var woodchair = parChair*chair;

  var totalwood = woodbad + woodchair + woodtable ;

  return totalwood;

}


var total = woodClc(2,2,3);

console.log(total);