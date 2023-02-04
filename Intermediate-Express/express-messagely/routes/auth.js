const jwt = require('jsonwebtoken');
const Router = require('express').Router;
const router = new Router();
const db = require('../db');
const { ensureLoggedIn, ensureCorrectUser, authenticateJWT } = require('../middleware/auth');

const User = require('../models/user');
const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');
const ExpressError = require('../expressError');

router.get('/', (req, res, next) => {
	res.send('APP IS WORKING');
});

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

router.post('/login', async (req, res, next) => {
	try {
		let { username, password } = req.body;
		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign({ username }, SECRET_KEY);
			return res.json({ message: `You are logged in!`, token });
		}
		throw new ExpressError('Incorrect username or password', 400);
	} catch (err) {
		return next(err);
	}
});

/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

router.post('/register', async function(req, res, next) {
	try {
		let { username } = await User.register(req.body);
		let token = jwt.sign({ username }, SECRET_KEY);
		User.updateLoginTimestamp(username);
		return res.json({ token });
	} catch (err) {
		return next(err);
	}
});

router.get('/secret', ensureLoggedIn, (req, res, next) => {
	try {
		const token = req.body._token;

		const data = jwt.verify(token, SECRET_KEY);
		return res.json({ msg: 'Signed in!' });
	} catch (err) {
		return next(new ExpressError('Login first', 401));
	}
});

module.exports = router;
