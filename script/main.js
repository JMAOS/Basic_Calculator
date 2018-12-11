
let numPad = document.getElementsByClassName("numPad");

numPad.forEach(element => {
    element.addEventListener("onClick", function(){
        
    })
    
});

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
    return x/y;
}

function operate(operator, x, y){

    switch(operator){
        case add: 
            add(x,y);
            break;
        case sub:
            subtract(x,y);
            break;
        case mul:
            multiply(x,y);
            break;
        case div:
            divide(x,y);
            break;
    }
}
