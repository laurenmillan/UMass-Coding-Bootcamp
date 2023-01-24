const fs = require('fs');
// process is a global object for managing the currently running script
// Using process, we can access enviroment variables, see the
//  command-line arguments passed to the script, or kill the script
// fs means filesystem, we can use this to read/write files to
const process = require('process');

// path is urls.txt

function readFilemname(path) {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			console.log(`ERROR FETCHING ${path}: ${err}`);
			process.exit(1);
		}
		console.log(`Wrote to ${data}`);
	});
}
readFilemname(process.argv[2]);

// to run this in the shell, ensure you're in correct directory, then type
//  node urls.js urls.txt
