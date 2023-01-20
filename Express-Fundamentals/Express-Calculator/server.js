// this looks for a package called express
const express = require('express');

// then execute express as a function and store the return value in app
const app = express();

// START THE SERVER: call app.listen, which asks for a port as the
//  first argument; 3000 is standard, then the callback function
// this function goes at the bottom of the app
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
