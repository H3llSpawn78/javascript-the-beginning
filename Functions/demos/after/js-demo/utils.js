// --------------------------------- Notes ---------------------------------
//



function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}

// Function expression

// Declare
// let fn = function (){
//     alert("This is a function expression");
// }

// Invoke
// fn();


// Function with parameters
function showString (stringA, stringB){
    console.log(stringA);
    console.log(stringB);
};

showString("This is string A", "This is string B");


// Function expression with params
let showStrings = function (stringA, stringB){
    console.log(stringA);
    console.log(stringB);
};

showStrings("String A", "String B");

// Function return values

function multiplyValue(value) {
    let multiply = value * 100;
    return multiply;
}

let multiplyValueResult = multiplyValue(10);
showMessage(multiplyValueResult);

// Function scope - Global and Block Scope

