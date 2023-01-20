'use strict';

// the code below uses no Promises with jQuery AJAX methods:

// let num;

// // get facts about multiple numbers in one request
// $.getJSON('http://numbersapi.com/1..3,10?json', (response) => {
// 	num = response;
// 	console.log(num);
// });

// JS Promises: a one-time guarantee of future.
// Axios request:

// let url = 'http://numbersapi.com/1..3?json';
// let promise = axios.get(url);
// console.log('REQUEST HAS BEEN SENT!');

// // The Promise returns an object. Axios makes the Promise and returns it.
// // A Promise can be one of three states: Pending, Resolved/Fulfilled or Rejected.
// // In order to access the resolved data of the Promise, we use the method .then and .catch, which accepts callbacks.
// promise.then((response) => console.log(response.data));
// promise.catch((err) => console.log('REJECTED!', err));
// console.log('I AM THE LAST LINE');

// another way to write the above:
// let url = 'http://numbersapi.com/1..3?json';
// axios.get(url).then((response) => console.log(response.data)).catch((err) => console.log('REJECTED!', err));

//** Part I */

//** Exercise I: make a request to the Numbers API to get a fact about a favorite number: */

let url = 'http://numbersapi.com';
axios
	.get(`${url}/7?json`)
	.then((response) => console.log(response.data.text))
	.catch((err) => console.log('REJECTED!', err));

//** Exercise II: get data on multiple numbers in a single request: */

//let url = 'http://numbersapi.com';
let faveNum = [ 30, 7, 92 ];
$.getJSON(`${url}/${faveNum}?json`).then((data) => {
	console.log(data);
});

//** Exercise III: use the Numbers API to get 4 facts on your favorite number: */

//let url = 'http://numbersapi.com';
axios
	.get(`${url}/92?json`)
	.then((p1) => {
		console.log(p1.data.text);
		return axios.get(`${url}/92?json`);
	})
	.then((p2) => {
		console.log(p2.data.text);
		return axios.get(`${url}/92?json`);
	})
	.then((p3) => {
		console.log(p3.data.text);
		return axios.get(`${url}/92?json`);
	})
	.then((p4) => {
		console.log(p4.data.text);
		return axios.get(`${url}/92?json`);
	})
	.catch((err) => console.log('REJECTED!', err));
