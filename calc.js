let display1 = document.querySelector('.display1');
let display2  = document.querySelector('.display2');
let tempResult = document.querySelector('.tempresult')
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equal = document.querySelector('.equals');
let clearAll = document.querySelector('.clearall');
let backspace = document.querySelector('.backspace');

let dispNum1 = ''
let dispNum2 = '';
let result= null;
let haveDot = false;
let lastOperation = '';
// let theNum = '0.01';

numbers.forEach(number =>{
    number.addEventListener('click', (e)=>{
        if (haveDot === false && e.target.innerText === '.')
        {
            haveDot = true;
        }
        else if( haveDot && e.target.innerText === '.')
        {
            return;
        }
        // getFormattedNumber(theNum);
        dispNum2 += e.target.innerText;
        display2.innerText = dispNum2;
    })
})
// function getFormattedNumber(dispNum2){
//     var n = Number(dispNum2);
//     var value = n.toLocaleString('en');
// }
operators.forEach(operator =>{
    operator.addEventListener('click', (e)=>{
        var operationName = e.target.innerText;
        if (!dispNum2){
            return;
        }
        else{
            haveDot = false;
        }
    if(dispNum1 && dispNum2 && lastOperation){
        mathOperation();
    }
    // else if (dispNum2){
    //     otherOps();
    // }
    else{
        result = parseFloat(dispNum2);
    }
    clearVar(operationName); 
    lastOperation = operationName;
    })
})
function clearVar (name = ''){
    dispNum1 += dispNum2 + ' ' + name + ' ';
    display1.innerText = dispNum1;
    dispNum2 = '';
    display2.innerText = '';
    tempResult.innerText = result;

}
function mathOperation() {
    if (lastOperation === '*'){
        result = parseFloat(result)*parseFloat(dispNum2);
    }
    else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dispNum2);
    }
    else if (lastOperation === '+'){
        result = parseFloat(result)+parseFloat(dispNum2);
    }
    else if (lastOperation === '/'){
        result = parseFloat(result)/parseFloat(dispNum2);
    }
}
// function otherOps (){
//     if (lastOperation === '%'){
//         result = parseFloat(result)*parseFloat(theNum);
//     }
//     else if (lastOperation === 'SQR'){
//         result = parseFloat(dispNum2)*2;
//     }
// }

equal.addEventListener('click',(e)=>{
    if (!dispNum1 || !dispNum2){
        return;
    }
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    dispNum2 = result;
    dispNum1 = ''
    tempResult.innerText = '';
})
backspace.addEventListener('click', (e)=>{
    if (dispNum2){
        dispNum2='';
        display2.innerText= ''
    }
    return;
})
clearAll.addEventListener('click', (e)=>{
    display1.innerText = '0';
    dispNum1 = '';
    display2.innerText = '0';
    dispNum2 = '';
    result = '';
    tempResult.innerText = '';

})