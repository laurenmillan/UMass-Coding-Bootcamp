const express = require('express');
const router = express.Router();
const db = require('../db');

// GET request
router.get('/', async (req, res) => {
	try {
		const results = await db.query(`SELECT * FROM invoices`);
		return res.json(results.rows);
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to see data

// GET request to return obj on given invoice
router.get('/id', async (req, res, next) => {
	try {
		const { id } = req.query;
		const results = await db.query(`SELECT * FROM invoices WHERE id=$1`, [ id ]);
		return res.status(404).json(results.rows);
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to see data, add /id:  http://localhost:3000/invoices/id
//  then click Query and write id as the name/key and 1 or 2, etc as the value to see data

// POST request to add an invoice
router.post('/', async (req, res, next) => {
	try {
		const { comp_code, amt } = req.body;
		const results = await db.query('INSERT INTO invoices (comp_code, amt) VALUES ($1, $2) RETURNING *', [
			comp_code,
			amt
		]);
		return res.status(201).json(results.rows[0]);
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to add data using POST request

// PATCH request to edit invoice
router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const { amt } = req.body;
		const results = await db.query('UPDATE invoices SET amt=$1 WHERE id=$2 RETURNING *', [ amt, id ]);
		return res.send(results.rows[0]);
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to edit data using PATCH request

// DELETE request to delete invoice
router.delete('/:id', async (req, res, next) => {
	try {
		const results = db.query('DELETE FROM invoices WHERE id=$1', [ req.params.id ]);
		return res.send({ msg: 'Deleted!' });
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to delete data using DELETE request

module.exports = router;
