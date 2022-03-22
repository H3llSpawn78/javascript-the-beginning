//Assignement operator =
// ++ increment operator - add to the left of the variable that you want it assigned to. Not doing so will create a bug
// -- decrement operator - add to the left of the variable that you want it assigned to. Not doing so will create a bug

// Operator precedence
// e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Escape notation
// e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let price = 25.99;
price += 5;

let person = {
    firstName: 'Rich',
    lastName: 'Mery'
};

let userName = 'Rich';
let message = `Discount for`;
//let message = 123;


showMessage(message + "\n" + person.firstName + " " + person.lastName);
// console.log(person);
// console.log(typeof person);