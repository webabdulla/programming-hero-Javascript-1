document.getElementById('Deposit-btn').addEventListener('click',function(){
    const deposite = document.getElementById("deposit-fild");
    const newDepositeString =deposite.value;
    const newDeposite = parseFloat(newDepositeString);
console.log(typeof newDeposite);
    
    // stap 3 deposit total amount 
    const totalDepo = document.getElementById('totalDepo');
    const previousDepoString = totalDepo.innerText;
    // step 4 add number set the total deposit
    const previousDepo = parseFloat(previousDepoString);
    const curentDeposite = previousDepo + newDeposite;

    totalDepo.innerText = curentDeposite;

    //  step 5 get blanc current total
    const blancTotalElements = document.getElementById('blanceTotal');
    const previousBlancString = blancTotalElements.innerText;
    const previousBlanc = parseFloat(previousBlancString);
    // step 6 calclute current total balance
    const currentTotalBalance = previousBlanc + newDeposite;
    // set balance 
    blancTotalElements.innerText = currentTotalBalance;
    // step 7
    deposite.value = '';
})