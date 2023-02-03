const jwt = require('jsonwebtoken');
const Router = require('express').Router;
const router = new Router();
const db = require('../db');
const { ensureLoggedIn, ensureCorrectUser } = require('../middleware/auth');

const Message = require('../models/message');
const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');
const ExpressError = require('../expressError');

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/

router.get('/:id', ensureLoggedIn, async (req, res, next) => {
	try {
		const msgId = req.params.id;

		const results = await Message.get(msgId);
		if (req.usuer.username == results.from_user.username || req.usuer.username == results.to_user.username) {
			return res.json({ message: results });
		} else {
			throw new ExpressError('Access denied', 401);
		}
	} catch (err) {
		return next(err);
	}
});

/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/

router.post('/', ensureLoggedIn, async (req, res, next) => {
	try {
		const { to_username, body } = req.body;
		const msg = await Message.create(req.user.username, to_username, body);
		return res.json({ message: msg });
	} catch (err) {
		return next(err);
	}
});

/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/

router.post('/:id', ensureLoggedIn, async (req, res, next) => {
	try {
		const msgId = req.params.id;
		const msg = await Message.get(msgId);
		if (req.user.username == msg.to_user.username) {
			await Message.markRead(msgId);
			return res.json({ message: { id: msg.id, read_at: msg.read_at } });
		} else {
			throw new ExpressError('Access denied', 401);
		}
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
