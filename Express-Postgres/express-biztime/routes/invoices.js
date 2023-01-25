const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
	const results = await db.query(`SELECT * FROM invoices`);
	return res.json(results.rows);
});
// run nodemon app.js
// use Insomnia to see data

module.exports = router;
