
//------------------------- Notes -------------------------------

// + symbol leaves the number as is and - symbol makes the number a negative number
// However, the + symbol converts string to number in the below scenario

//let price = +(1.1 + 1.3).toFixed(2);

// Comparison operators
// === strict comparison (equality)
// == non strict (inequality) - this will equal in true - 2 = "2"

// '0' = true
// Every number is true except 0

// var will allow for gloabl scope even when used within block scope


// if (price === 2.4) {
//     showMessage('true');
// } else if (price !== 2.4) {
//     showMessage('false');
// }


// Terniary operator - short-hand with 3 values - Condition, true statement and false statement

let price = 20;

//(price < 10) ? showMessage('Expensive') : showMessage('Cheap');


// Block scope

//if (true){

// let value = 'yes';

//     showMessage(value);

// }
// Block scope let will not be accessible outside of its block 
//console.log(value);

// For loop
// iterator loop

// for (let i = 0; i <= 5; i++) {

//     // console.log(i);

//     showMessage('count' + i);
//  }

// Infinate loop
// for (let i=0; i <= 5; i--){
//     console.log(i);
// }

// While loop - iterate from 1 to 10

// let i = 1;

// while (i <= 10){
//     console.log(i);
//     i++;
// }

// Do while loop

// let count = 10;

// do{
// console.log(count);
//     count++;
// } while(count < 5);
