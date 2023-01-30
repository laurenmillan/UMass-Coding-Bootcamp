const express = require('express');
const ExpressError = require('../expressError');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
	try {
		const results = await db.query(`SELECT * FROM industries`);
		return res.json({ industry: results.rows });
	} catch (err) {
		return next(err);
	}
});

router.get('/:code', async (req, res, next) => {
	try {
		const results = await db.query(`SELECT code, industries FROM industries WHERE code=$1`, [ req.params.code ]);
		return res.send(results.rows[0]);
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
