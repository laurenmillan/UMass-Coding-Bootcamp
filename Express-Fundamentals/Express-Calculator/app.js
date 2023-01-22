// this looks for a package called express
const express = require('express');
// ./expressError is looking for a file name
const ExpressError = require('./expressError');

// then execute Express as a function and store the return value in app
const app = express();
const { mean, median, mode } = require('./operations');

// this tells Express to parse request body for either form data or JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// using next as a third param will tell Express to move to next callback
app.use((req, res, next) => {
	debugger;
	console.log('The server received a request');
	next();
});

// every handler should have a calllback with two parameters: request & response
app.get('/mean', (req, res) => {
	try {
		// if (req.body.name.toLowerCase === NaN) res.status(404).json({ msg: 'That is not a number' });
		if (req.body === NaN) throw ExpressError('not a number', 404);
		return next(err);
	} catch (e) {
		next(e);
	}
});

// app.get('/mean', (req, res) => {
// 	// console.log(req.query)
// 	const { nums } = req.query;
// 	return res.send(`Output: ${nums} `);
// });

// app.get('/median', (req, res) => {
// 	console.log('/median');
// });

// app.get('/mode', (req, res) => {
// 	console.log('/mode');
// });

// app.use runs for every single request
//  this will run if there is no match - a page that doesn't exists
app.use((req, res, next) => {
	const e = new ExpressError('Page not found', 404);
	next(e);
});

// error handler goes at end of app
app.use((error, req, res, next) => {
	// console.log(error.msg);
	res.status(error.status).send(error.msg);
});

// responding with a JSON error for a JSON api
app.use((err, req, res, next) => {
	// the default status is 500 Internal Server Error
	let status = err.status || 500;
	let message = err.message;

	// set status and alert user
	return res.status(status).json({
		error: { message, status }
	});
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
