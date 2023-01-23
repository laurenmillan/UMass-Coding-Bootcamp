// this looks for a package called express
const express = require('express');

// ./expressError is looking for a file name
const ExpressError = require('./expressError');

const middleware = require('./middleware');

// ./itemsRoutes is looking for a file name
const itemRoutes = require('./itemRoutes');

// execute Express as a function and store the return value in app
const app = express();

// Middleware: this tells Express to parse request body for either form data or JSON
//  this runs before every route we define
app.use(express.json());

// this tells Express to use the logger function on every request
//  it is placed above all routes
app.use(middleware.logger);

// apply a prefix to every route in itemRoutes
app.use('/items', itemRoutes);

// this route ignores favicon which is printed to terminal
// a status of 204 means no content
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

//app.use(express.urlencoded({ extended: true }));

//****** Middleware ******/

//  404 handler
app.use((req, res, next) => {
	return new ExpressError('Page not found', 404);
});

// generic error handler
app.use((err, req, res, next) => {
	// the default status is 500 Internal Server Error
	let status = err.status || 500;
	let message = err.message;

	// set status and alert user
	return res.status(status).json({
		error: {
			message: err.message,
			status: status
		}
	});
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
