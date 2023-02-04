const express = require('express');
const Router = require('express').Router;
const router = new Router();
const User = require('../models/user');
const db = require('../db');
const { ensureLoggedIn, ensureCorrectUser } = require('../middleware/auth');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');
const ExpressError = require('../expressError');

/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/

router.get('/', ensureLoggedIn, async (req, res, next) => {
	try {
		const results = await User.all();
		return res.json({ Users: results });
	} catch (e) {
		return next(e);
	}
});

/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/

router.get('/:username', ensureCorrectUser, ensureLoggedIn, async (req, res, next) => {
	try {
		const username = req.params.username;
		const results = await User.get(username);
		return res.json({ user: results });
	} catch (e) {
		return next(e);
	}
});

/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

router.get('/:username/to', ensureCorrectUser, ensureLoggedIn, async (req, res, next) => {
	try {
		const username = req.params.username;
		const results = await User.messagesTo(username);
		return res.json({ messages: results });
	} catch (e) {
		return next(e);
	}
});

/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

router.get('/:username/from', ensureLoggedIn, async (req, res, next) => {
	try {
		const username = req.params.username;
		const results = await User.messagesFrom(username);
		return res.json({ messages: results });
	} catch (e) {
		return next(e);
	}
});

module.exports = router;
