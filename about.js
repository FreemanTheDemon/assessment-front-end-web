function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function hoverDuck() {
	alert('Thank you! *quack*');
}

let duck = document.querySelector('#duck');

duck.addEventListener('mouseover', hoverDuck);