document.getElementById('withdrow-btn').addEventListener('click' , function(){
    const widthrowFild = document.getElementById('withdrow');
    const newWidthrowString=widthrowFild.value;
    const newWidthrow = parseFloat(newWidthrowString);
    
    // step 3
    const widthrowTotale = document.getElementById('widthrow-total');
    const previousTotalWidhrow = widthrowTotale.innerText;
    const previousTotal = parseFloat(previousTotalWidhrow);
    const currentwidthrowTotale = previousTotal+newWidthrow;

    widthrowTotale.innerText = currentwidthrowTotale;
//  step 5
const blanceTotalElements = document.getElementById('blanceTotal');
const previousBalanceTotalstring = blanceTotalElements.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalstring);
const totalWidthrow = previousBalanceTotal - newWidthrow;

blanceTotalElements.innerText = totalWidthrow;

    // step 7
    widthrowFild.value = '';
});