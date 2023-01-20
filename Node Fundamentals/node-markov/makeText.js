/** Command-line tool to generate Markov text. */

const markov = require('./markov');
const fs = require('fs');
const axios = require('axios');
const process = require('process');

function handleOutput(text) {
	let mm = new markov.MarkovMachine(text);
	console.log(mm.input());
}

function input(path, output) {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			console.log(`Error fetching ${path}: ${err}`);
			process.exit(1);
		} else {
			handleOutput(data, output);
		}
	});
}
input(process.argv[2]);

async function urlText(url, output) {
	try {
		let resp = axios.get(url);
		handleOutput(resp.data, output);
	} catch (err) {
		console.log(`Error with ${path}: ${err}`);
		process.exit(1);
	}
}

let path;
let output;

if (process.argv[2] === '--out') {
	output = process.argv[3];
	path = process.argv[4];
} else {
	path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
	urlText(path, output);
} else {
	cat(path, output);
}
