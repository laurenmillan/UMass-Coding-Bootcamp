//** Async Await */

//** Exercise I: make a request to the Numbers API to get a fact about a favorite number: */

// async function getFaveNumber() {
// 	console.log('starting');
// 	const response = await axios.get('http://numbersapi.com/7?json');
// 	// these lines do not run until promise is resolved
// 	console.log('finished');
// 	console.log(response);
// }
// getFaveNumber();

//** Exercise II: get data on multiple numbers in a single request: */

// let url = 'http://numbersapi.com';
// async function multNums() {
// 	let res = $.getJSON(`${url}/7..11`);
// 	let response = await res;
// 	console.log(response[7]);
// 	console.log(response[8]);
// 	console.log(response[9]);
// 	console.log(response[10]);
// 	console.log(response[11]);
// }
// multNums();

//** Exercise III: use the Numbers API to get 4 facts on your favorite number: */

let url = 'http://numbersapi.com';

async function faveNum() {
	let p1 = $.getJSON(`${url}/7?json`);
	let p2 = $.getJSON(`${url}/6?json`);
	let p3 = $.getJSON(`${url}/92?json`);
	let p4 = $.getJSON(`${url}/13?json`);

	let p1res = await p1;
	let p2res = await p2;
	let p3res = await p3;
	let p4res = await p4;

	console.log(p1res.text);
	console.log(p2res.text);
	console.log(p3res.text);
	console.log(p4res.text);
}
faveNum();
