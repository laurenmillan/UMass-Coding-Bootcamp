// console.log('this works');

async function getRandomGiph() {
	const res = await axios.get('https://api.giphy.com/v1/gifs/trending', {
		params: {
			api_key: 'awRqCORuSqyRzsX30NEr8lC4bUXQLpEb'
		}
	});

	let generateRes = res.data.data.length;
	const giph = Math.floor(Math.random() * generateRes);

	const url = res.data.data[giph].images.original.url;
	const img = document.createElement('IMG');
	const results = document.querySelector('#results');
	img.classList.add('giphy');
	img.src = url;
	results.append(img);
}

const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	// console.log(input.value);
	getRandomGiph(input.value);
});

const removeGiphy = document.querySelector('#remove');
removeGiphy.addEventListener('click', function(e) {
	e.preventDefault();
	const results = document.getElementById('results');
	results.innerHTML = '';
});
