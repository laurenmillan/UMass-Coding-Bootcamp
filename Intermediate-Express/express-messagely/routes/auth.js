const jwt = require('jsonwebtoken');
const Router = require('express').Router;
const router = new Router();
const db = require('../db');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { SECRET_KEY } = require('../config');
const ExpressError = require('../expressError');

router.get('/', (req, res, next) => {
	res.send('App Is Functional');
});

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

router.post('/register', async (req, res, next) => {
	try {
		const { username, password, first_name, last_name, phone } = req.body;
		// hash password
		// save to db
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
