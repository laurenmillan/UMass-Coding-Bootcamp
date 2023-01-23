//**** /items routes ****/

const express = require('express');
const ExpressError = require('./expressError');
const items = require('./fakeDb');

// Express router allows us to separate our routes without cluttering app.js file
//  const router: router is an object that we can define our routes on
//  this is connecting this file to the app file
const router = new express.Router();

// GET items request
router.get('/', (req, res) => {
	// this will send a json response with the items database - items array
	res.json({ items });
});

// POST items request
router.post('/', (req, res, next) => {
	try {
		if (!req.body.name) throw new ExpressError('Name is required', 400);
		const newItem = { name: req.body.name, price: req.body.price };
		items.push(newItem);
		return res.status(201).json({ item: newItem });
	} catch (e) {
		return next(e);
	}
});

// GET name request
router.get('/:name', (req, res) => {
	const foundItem = items.find((item) => item.name === req.params.name);
	if (foundItem === undefined) {
		throw new ExpressError('Item not found', 404);
	}
	res.json({ item: foundItem });
});

// PATCH items request
router.patch('/:name', (req, res) => {
	const foundItem = items.find((item) => item.name === req.params.name);
	if (foundItem === undefined) {
		throw new ExpressError('Item not found', 404);
	}
	foundItem.name = req.body.name;
	res.json({ item: foundItem });
});

// DELETE request
router.delete('/:name', (req, res) => {
	const foundItem = items.findIndex((item) => item.name === req.params.name);
	if (foundItem === -1) {
		throw new ExpressError('Item not found', 404);
	}
	items.splice(foundItem, 1);
	res.json({ message: 'Your item was deleted!' });
});

module.exports = router;
