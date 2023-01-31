const express = require('express');
const ExpressError = require('../expressError');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
	try {
		const results = await db.query(
			`
    SELECT i.code, c.code, i.industry
    FROM industries AS i
    LEFT JOIN comp_industries AS ci
    ON i.code = ci.ind_code
    LEFT JOIN companies AS c
    ON ci.ind_code = c.code`
		);
		if (results.rows.length === 0) {
			throw new ExpressError('Not found', 404);
		}
		const { code, industry } = results.rows[0];
		const comp_codes = results.rows.map((r) => r.code);
		return res.send({ code, industry, comp_codes });
	} catch (err) {
		return next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		if (req.body.ind_code && req.body.comp_code) {
			const { comp_code, ind_code } = req.body;
			const result = await db.query(
				`INSERT INTO comp_industries (comp_code, ind_code) 
        VALUES ($1, $2) 
        RETURNING comp_code, ind_code`,
				[ comp_code, ind_code ]
			);
			if (results.rows.length === 0) {
				throw new ExpressError('Not found', 404);
			}
			return resjson(result.rows[0]);
		}
		const { code, industry } = req.body;
		const results = await db.query(
			`INSERT INTO industries (code, industry) 
      VALUES ($1, $2) 
      RETURNING code, industry`,
			[ code, industry ]
		);
		return res.status(201).json({ industry: results.rows[0] });
	} catch (err) {
		next(err);
	}
});

router.delete('/:code', async (req, res, next) => {
	try {
		const results = db.query('DELETE FROM industries WHERE code=$1', [ req.params.code ]);
		return res.send({ msg: 'Deleted!' });
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
