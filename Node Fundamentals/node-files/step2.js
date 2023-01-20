const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			console.log(`ERROR WITH ${path}: ${err}`);
			process.exit(1);
		}
		console.log(data);
	});
}

async function webCat(url) {
	try {
		let response = await axios.get(url);
		console.log(response.data);
	} catch (err) {
		console.log(`ERROR WITH ${path}: ${err}`);
		process.exit(1);
	}
}
let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
	webCat(path);
} else {
	cat(path);
}

// to run this in the shell, ensure you're in correct directory, then type
//  node step2.js one.txt, then node step2.js http://google.com
