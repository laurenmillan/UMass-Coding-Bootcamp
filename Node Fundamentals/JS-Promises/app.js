'use strict';

// the code below uses jQuery AJAX methods:

// let num;

// // get facts about multiple numbers in one request
// $.getJSON('http://numbersapi.com/1..3,10?json', (response) => {
// 	num = response;
// 	console.log(num);
// });

// JS Promises: a one-time guarantee of future.
// Axios request:

let url = 'http://numbersapi.com/1..3?json';
let promise = axios.get(url);
console.log(promise);
// the promise returns an object. Axios makes the Promise and returns it.
// In order to access the resolved data of the Promise, we use the method .then and .catch, which accepts callbacks.
