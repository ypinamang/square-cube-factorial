const userInput = document.querySelector(".user-input");
const squaredNumber = document.querySelector(".squared");
const cubedNumber = document.querySelector(".cubed");
const factorialNumber = document.querySelector(".factorial");
const warningText = document.querySelector(".warning")
function squared(number) {
    return number * number;
}

function cubed(number) {
    return number * number * number;
}

function factorial(number) {
    if (number < 0) return "Don't be silly 😜";
    if (number === 0) return 1;
    let x = number - 1;
    while (x > 1) {
        number *= x;
        x--;
    }
    return number;
}


// Compute and show values
userInput.addEventListener("change", () => {
    const enteredNum = parseFloat(userInput.value)
    if (isNaN(enteredNum)){ // make sure user enters a number
       warningText.textContent = "You need to enter a number";
    } else {
        attachValue(enteredNum);
        warningText.textContent = "";
        squaredNumber.textContent = squared(enteredNum);
        cubedNumber.textContent = cubed(enteredNum);
        factorialNumber.textContent = factorial(enteredNum);       
    }

});

function attachValue(value) { //Attaches the value to the info strings
    const enteredValue = document.querySelectorAll(".entered-num");
    let i = 0;
    while (i < enteredValue.length){
        enteredValue[i].textContent = value;
        i++;
    }
}