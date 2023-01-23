const ExpressError = require('./expressError');

//** Middleware function */
function logger(req, res, next) {
	console.log(`Received a ${req.method} request to ${req.path}.`);
	return next();
}

//** In order for ExpressError to work seamlessly, we use try & catch */
//   Using this pattern is important when working w/ aynchronous code and databases
// This is just an example function for password auth from Colt's video
// function checkForPassword(req, res, next) {
// 	try {
// 		if (req.query.password !== 'catsrule') {
// 			throw new ExpressError('Missing Password', 402); // status 402 means unauthorized
// 		} else {
// 			next();
// 		}
// 	} catch (e) {
// 		return next(e);
// 	}
// }

module.exports = { logger };
