const express = require('express');
const ExpressError = require('./expressError');
const axios = require('axios');
const router = new express.Router();

//** POST Route */
router.post('/', (req, res, next) => {
	try {
		const results = req.body.developers.map(async (d) => {
			return await axios.get(`https://api.github.com/users/${d}`);
		});
		const out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));
		return res.send(JSON.stringify(out));
	} catch (err) {
		return next(err);
	}
});

module.exports = router;

// to run this app in shell - nodemon app.js, then instead of going to localhost:3000,
//  go to https://api.github.com/users to see JSON
