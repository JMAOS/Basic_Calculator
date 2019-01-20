let calculatorScreen;
let numPad;
let result;
let selectedOperator;
let operators;
let firstArgument;
let secondArgument;

const MAX_NUMBER_OF_DIGITS = 8;

window.onload = function () {
    init();
    for(let i = 0; i<numPad.length; i++){
        numPad[i].addEventListener("click", enterNumber);
    }

    for(let i = 0; i<operators.length; i++){
        operators[i].addEventListener("click", operatorChosen);
    }
};

function init(){
    calculatorScreen = document.getElementById("calculatorScreen");
    numPad  = document.getElementsByClassName("numPad");
    operators = document.getElementsByClassName("operator");
}

function enterNumber(event){

    if(calculatorScreen.innerHTML.length == MAX_NUMBER_OF_DIGITS) return;

    let numberClicked = event.target.getAttribute("data-number");
    //console.log(event.target.getAttribute("data-number"));
    displayResult(numberClicked);
    if(selectedOperator == null) firstArgument = parseFloat(numberClicked);
    else secondArgument = parseFloat(numberClicked);
    //result = parseInt(calculatorScreen.innerHTML);
}

function operatorChosen(event){
    firstArgument = parseFloat(calculatorScreen.innerHTML);
    clearScreen();
    selectedOperator = event.target.getAttribute("data-operator");
}

function clearScreen(){
    calculatorScreen.innerHTML = "";
}

function getResult(){

    if (firstArgument == null || selectedOperator == null){
        alert("The fuck you doin man, the fuck wrong with you!");
        return;
    }

    secondArgument = parseFloat(calculatorScreen.innerHTML);
    result = operate(selectedOperator, firstArgument, secondArgument);
    clearScreen();
    displayResult(result);
    firstArgument = result;
    selectedOperator = null;
    secondArgument = null;
}

function displayResult(result){
    if(result.length == MAX_NUMBER_OF_DIGITS){
        calculatorScreen.innerHTML = "OVERFLOW";
        return;
    }
    calculatorScreen.innerHTML = calculatorScreen.innerHTML + result;
}

function resetCalculator(){
    clearScreen();
    firstArgument = null;
    selectedOperator = null;
}

function removeLastDigit(){
    let strLength = calculatorScreen.innerHTML.length;
    calculatorScreen.innerHTML = calculatorScreen.innerHTML.slice(0, strLength - 1);
}

function operate(operator, x, y){

    let resultOfOperation;

    switch(operator){
        case "add": 
            resultOfOperation = add(x,y);
            break;
        case "sub":
            resultOfOperation = subtract(x,y);
            break;
        case "mul":
            resultOfOperation = multiply(x,y);
            break;
        case "div":
            resultOfOperation = divide(x,y);
            break;
        }
    return resultOfOperation;
}

function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    if(y == 0){
        document.body.style.backgroundImage = "url('/img/blackhole.jpg')";

    }
    return x/y;
}