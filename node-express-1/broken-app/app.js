const express = require('express');
const app = express();

const ExpressError = require('./expressError');

const userRoutes = require('./userRoutes');

app.use(express.json());

// apply a prefix to every route in userRoutes
app.use('/', userRoutes);

const middleware = require('./middleware');
const morgan = require('morgan');

// Morgan is an external middleware instead of writing a logger function
app.use(morgan('dev'));

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

module.exports = app;
