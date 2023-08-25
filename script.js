const add = (numOne, numTwo) => numOne + numTwo;
// console.log(add(1,2));
const subtract = (numOne, numTwo) => numOne - numTwo;
// console.log(subtract(1,2));
const multiply = (numOne, numTwo) => numOne * numTwo;
// console.log(multiply(1,2));
const divide = (numOne, numTwo) =>{
    if (numTwo == 0) return "Can't Divide by Zero" 
    return numOne / numTwo
};
// console.log(divide(1,0));
const operate = (operator, numOne, numTwo) => {
    if (operator == '+') {
        return add(numOne, numTwo)
    }
    else if (operator == '-') {
        return subtract(numOne, numTwo)
    }
    else if (operator == '*') {
        return multiply(numOne, numTwo)
    }
    else if (operator == '/') {
        return divide(numOne, numTwo)
    }
}

// console.log(operate('/', 1 ,2))
const currDisplay = document.querySelector('.display > .current')
const numButtons = document.querySelectorAll('.button-30#number')
// console.log(numButtons)
let processString = "";

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', function(event) {
        processString += event.target.value
        currDisplay.textContent += `${event.target.value}`
    })
})

const operatorButtons = document.querySelectorAll('.button-30#operator')

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', function(event) {
        processString += ` ${event.target.value} `;
        let currOperator = event.target.value;
        if (currOperator == "+"){
            currDisplay.innerHTML += ` <span>&#43;</span> `
        }
        else if (currOperator == "-"){
            currDisplay.innerHTML += ` <span>&#8722;</span> `
        }
        else if (currOperator == "*"){
            currDisplay.innerHTML += ` <span>&#215;</span> `
        }
        else if (currOperator == "/"){
            currDisplay.innerHTML += ` <span>&#247;</span> `
        }
        else if (currOperator == "**"){
            currDisplay.textContent += ` ^ `
        }
        // console.log(currDisplay);
    })
})

const clearButton = document.querySelector("#delete")

clearButton.addEventListener('click', () => {
    //console.log(processString);
    currDisplay.textContent = "";
    currDisplay.innerHTML = "";
    processString = "";
})

const equalButton = document.querySelector(".button-30.equal");

equalButton.addEventListener('click', function(event) {
    processString += ` ${event.target.value}`
    currDisplay.textContent +=  ` =`
    // Add code to remove event listeners. (Do later)
    let processList = processString.split(" ")
    console.log(processList);
    processString = "";
})

