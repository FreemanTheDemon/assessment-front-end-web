function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('And so your text enters the abyss, never to be seen again...');
    input.value = '';
}

let input = document.querySelector('#abyss-input')

let form = document.querySelector('form#into-abyss');

form.addEventListener('submit', handleSubmit);

const colorFunc = () => {
    alert('Purple and Gold');
}

const placeFunc = () => {
    alert('Utah');
}

const ritualFunc = () => {
    alert('Drinking raw milk with honey');
}

let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', colorFunc);
place.addEventListener('click', placeFunc);
ritual.addEventListener('click', ritualFunc);