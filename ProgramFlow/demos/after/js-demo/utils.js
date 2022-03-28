
// Counter
// Set counter interval 
let counter = setInterval(updated, 1000);

// Set count start
let countStart = 0;

// Declare function
function updated() {

    // Traget elelemtn to update value of
    let count = document.getElementById('message');
    
    // Set iterated value
    count.innerHTML=++countStart;

    if(countStart===10){
        clearInterval(counter);
    }
}


updated();


