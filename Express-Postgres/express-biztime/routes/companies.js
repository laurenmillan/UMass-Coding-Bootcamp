const express = require('express');
const ExpressError = require('../expressError');
const router = express.Router();
const db = require('../db');
// installed slugify by doing npm i slugify
const slugify = require('slugify');

// GET request
router.get('/', async (req, res, next) => {
	try {
		// we use try & catch errors when using async function
		// db.query and pass in SQL query
		// db.query returns a Promise
		const results = await db.query(`SELECT * FROM companies`);
		// check out Section 36.1, video 3 for context on adding debugger to line 9
		// debugger;
		// results is an object, rows contains our data which is also an object
		return res.json({ companies: results.rows[0] });
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to see data

// GET request for returning obj of company
router.get('/:code', async (req, res, next) => {
	try {
		const { code } = req.query;
		// setting code=$1 and adding [code], this is called Paramaterized Queries. It sanitizes the values
		//  and prevents someone from attacking the db. This should be done with all queries!
		const results = await db.query(`SELECT * FROM companies WHERE code=$1`, [ code ]);
		if (results.rows.length === 0) {
			throw new ExpressError(`Cannot locate company with code of ${code}`, 404);
		}
		return res.status(404).json({ company: results.rows[0] });
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to see data, add /code:  http://localhost:3000/companies/code
//  then click Query and write code as the name/key and ibm or apple as the value

// POST request to add a company
router.post('/', async (req, res, next) => {
	try {
		const { name, description } = req.body;
		const code = slugify(name);
		const results = await db.query(
			// RETURNING * will return code, name, description
			'INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING *',
			[ code, name, description ]
		);
		// [0] will send back the first object
		return res.status(201).json({ company: results.rows[0] });
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to add data using POST request

// PATCH request to update company
router.patch('/:code', async (req, res, next) => {
	try {
		const { code } = req.params;
		const { name, description } = req.body;
		const results = await db.query('UPDATE companies SET name=$1, description=$2 WHERE code=$3 RETURNING *', [
			name,
			description,
			code
		]);
		if (results.rows.length === 0) {
			throw new ExpressError(`Cannot update company with code of ${code}`, 404);
		}
		return res.send({ company: results.rows[0] });
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to edit data using PATCH request

// DELETE request to delete company
router.delete('/:code', async (req, res, next) => {
	try {
		const results = db.query('DELETE FROM companies WHERE code=$1', [ req.params.code ]);
		return res.send({ msg: 'Deleted!' });
	} catch (err) {
		return next(err);
	}
});
// run nodemon app.js
// use Insomnia to delete data using DELETE request

module.exports = router;
