//------------------------------------------------------ Notes --------------------------------------------------
//Symbol

let mySymbol = Symbol();


// Objects
// let person ={
//     name: 'Rich',
//     age: 43,
//     partTime: false,
//     [mySymbol]: 'secretInformation'
// };

// person['age'] = 44; // square bracket notation

// showMessage(person.age); // dot notation


// Methods (function attached to an object)

// Object
let person = {
    name: 'Rich',
    age: 45,
    scenario: null,
    partTime: false,

    // Method
    showInfo: function (realScenario) {

        // this refers to 'this' object
        showMessage(this.name + ' is ' + realScenario)
    }
};

person.showInfo('Hanging on');
//showMessage(typeof person.showInfo);


// Passing Objects to Functions



// Show and hide section on click
const button = document.getElementById('see-review');

button.addEventListener('click', function(event) {

    const review = document.getElementById('review');

    if (review.classList.contains('transition-height')) {
        review.classList.remove('transition-height');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('transition-height');
        button.textContent = 'SEE REVIEW';
    }

});



