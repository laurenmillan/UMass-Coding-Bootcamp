// this looks for a package called express
const express = require('express');
// ./expressError is looking for a file name
const ExpressError = require('./expressError');

// execute Express as a function and store the return value in app
const app = express();
const { mean, median, mode, validateNum } = require('./operations');

// this tells Express to parse request body for either form data or JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// using next as a third param will tell Express to move to next callback
app.use((req, res, next) => {
	debugger;
	console.log('The server received a request');
	next();
});

//** mean */
// every handler should have a calllback with three parameters: request, response & next
app.get('/mean', (req, res, next) => {
	// console.log(req.query.nums);
	if (!req.query.nums) {
		throw new ExpressError('You must pass a list of numbers in', 400);
	}
	let passedNums = req.query.nums.split(', ');
	let nums = validateNum(passedNums);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}
	let result = {
		operation: 'mean',
		value: mean(passedNums)
	};
	return res.send(result);
});

//** median */
app.get('/median', (req, res, next) => {
	// console.log(req.query.nums);
	if (!req.query.nums) {
		throw new ExpressError('You must pass a list of numbers in', 400);
	}
	let passedNums = req.query.nums.split(', ');
	let nums = validateNum(passedNums);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}
	let result = {
		operation: 'median',
		value: median(passedNums)
	};
	return res.send(result);
});

//** mode */
app.get('/mode', (req, res, next) => {
	// console.log(req.query.nums);
	if (!req.query.nums) {
		throw new ExpressError('You must pass a list of numbers in', 400);
	}
	let passedNums = req.query.nums.split(', ');
	let nums = validateNum(passedNums);
	if (nums instanceof Error) {
		throw new ExpressError(nums.message);
	}
	let result = {
		operation: 'mode',
		value: mode(passedNums)
	};
	return res.send(result);
});

// app.use runs for every single request
//  this will run if there is no match - a page that doesn't exists
app.use((req, res, next) => {
	const e = new ExpressError('Page not found', 404);
	return next(e);
});

// error handler goes at end of app
// app.use((error, req, res, next) => {
// 	// console.log(error.msg);
// 	res.status(error.status).send(error.msg);
// });

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
