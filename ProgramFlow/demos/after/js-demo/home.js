
let i = -4;
do {
    console.log(i);
    i--;
} while (i > 0);


// + symbol leaves the number as is and - symbol makes the number a negative number
// However, the + symbol converts string to number in the below scenario

let price = +(1.1 + 1.3).toFixed(2) === 2.4;

if( price === 2.4){
    showMessage('true');
} else if (price !== 2.4){
    showMessage('false');
}