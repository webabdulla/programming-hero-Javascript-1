const numbers = [20,30,41,30,44,20];


// simple prosses 

// for(var i= 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// for of prosses 
// for (const number of numbers){
//     console.log(number);
// }


const products = [
    {id:1, name: "xiomi" , price : 20000},
    {id:2, name: "realmi" , price : 7000},
    {id:3, name: "radmi" , price : 5000},
    {id:4, name: "lonovo" , price : 150000},
    {id:5, name: "hp" , price : 100000},
]

// for (const product of products){
//     console.log(product);
// }

function matchedProduct (products, search){
    const matched= [];

    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProduct(products, 'xiomi');
console.log(result);

