// this looks for a package called express
const express = require('express');

// execute Express as a function and store the return value in app
const app = express();

// ./itemsRoutes is looking for a file name
const itemRoutes = require('./itemRoutes');

// ./expressError is looking for a file name
const ExpressError = require('./expressError');

// Middleware: this tells Express to parse request body for either form data or JSON
//  this runs before every route we define
app.use(express.json());

// apply a prefix to every route in itemRoutes
app.use('/items', itemRoutes);

const middleware = require('./middleware');
const morgan = require('morgan');

// Morgan is an external middleware instead of writing a logger function
app.use(morgan('dev'));

// this tells Express to use the logger function on every request
//  it is placed above all routes
// app.use(middleware.logger);

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
	res.status(err.status || 500);

	return res.json({
		error: err.message
	});
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
