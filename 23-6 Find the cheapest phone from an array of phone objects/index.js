var phones =[
    {name : 'xiomi', price:12000, camera: 10},
    {name : 'realmi', price:18000, camera: 10},
    {name : 'opp', price:20000, camera: 10},
    {name : 'ht', price:8000, camera: 10},
];

function cheapestPhone(phones){
   var cheapest= phones[0];

   for(var i=0; i < phones.length; i++){
       var phone = phones[i];

       if(phone.price < cheapest.price){
          cheapest = phone;
       }
   }
 return cheapest;
}

console.log (cheapestPhone(phones));
