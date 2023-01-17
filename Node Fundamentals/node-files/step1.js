const fs = require('fs');
// process is a global object for managing the currently running script
// Using process, we can access enviroment variables, see the
//  command-line arguments passed to the script, or kill the script
const process = require('process');

function cat(path) {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			console.log('ERROR', err);
			process.exit(1);
		}
		console.log(data);
	});
}
cat(process.argv[2]);

// to run this in the shell, ensure you're in correct directory, then type
//  node step1.js one.txt
