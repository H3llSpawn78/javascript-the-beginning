
const containers = 
    document.getElementsByClassName('container');
containers[0].classList.add('d-none');
console.log(containers);



// Show and hide section on click
const button = document.getElementById('see-review');

button.addEventListener('click', function(event) {

    const review = document.getElementById('review');

    if (review.classList.contains('transition-height')) {
        review.classList.remove('transition-height');
        button.textContent = 'SEE REVIEW';
    }
    else {
        review.classList.add('transition-height');
        button.textContent = 'CLOSE REVIEW';
    }

});