for(var i = 1 ; i <= 50; i++){

    if( i % 3  ===  0 && i % 5===0){
        console.log('foo bbbbbbbbbb');
    }

    else if( i % 5 ===0 ){
        console.log("bbbbbb");
    }
    else if( i % 3 ===0 ){
        console.log("aaaa");
    }
    else{
        console.log(i);
    }
    
}