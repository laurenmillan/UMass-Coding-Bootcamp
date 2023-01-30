const express = require('express');
const ExpressError = require('../expressError');
const router = express.Router();
const db = require('../db');

// GET request
router.get('/', async (req, res, next) => {
	try {
		const results = await db.query(`SELECT * FROM invoices`);
		return res.json({ invoices: results.rows });
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to see data

// GET request to return obj on given invoice
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.query;
		const results = await db.query(`SELECT * FROM invoices WHERE id=$1`, [ id ]);
		if (results.rows.length === 0) {
			throw new ExpressError(`Cannot locate invoice with id of ${id}`, 404);
		}
		return res.status(404).json({ invoice: results.rows[0] });
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
		return res.status(201).json({ invoice: results.rows[0] });
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to add data using POST request

// PATCH request to edit invoice
// router.patch('/:id', async (req, res, next) => {
// 	try {
// 		const { id } = req.params;
// 		const { amt } = req.body;
// 		const results = await db.query('UPDATE invoices SET amt=$1 WHERE id=$2 RETURNING *', [ amt, id ]);
// 		if (results.rows.length === 0) {
// 			throw new ExpressError(`Cannot update invoice with id of ${id}`, 404);
// 		}
// 		return res.send({ invoice: results.rows[0] });
// 	} catch (err) {
// 		return next(err);
// 	}
// });
// run nodemon app.js
// use Insomnia to edit data using PATCH request

// PART II of exercise: change logic
// PATCH request to edit invoice
router.patch('/:id', async (req, res, next) => {
	try {
		let paid_date;
		const { id } = req.params;
		const { amt, paid } = req.body;
		const invoiceRes = await db.query(`SELECT * FROM invoices`);
		if (invoiceRes.rows.length === 0) {
			throw new ExpressError(`Cannot update invoice with id of ${id}`, 404);
		}
		if (paid === 'true') {
			invoiceRes.paid_date ? (paid_date = invoiceRes.paid_date) : (paid_date = new Date());
		} else {
			paid_date = null;
		}
		const results = await db.query('UPDATE invoices SET amt=$1, paid=$2 WHERE id=$3 RETURNING *', [
			amt,
			paid,
			id
		]);
		return res.send({ invoice: results.rows[0] });
	} catch (err) {
		return next(err);
	}
});

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
