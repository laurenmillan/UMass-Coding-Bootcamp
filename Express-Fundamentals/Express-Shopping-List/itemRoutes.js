const express = require('express');

// Express router allows us to separate our routes without cluttering app.js file
//  const router: router is an object that we can define our routes on
//  this is connecting this file to the app file
const router = new express.Router();

const ITEMS = [ { id: 1, name: 'popsicle', price: '1.45' }, { id: 2, name: 'cheerios', price: '3.40' } ];

// GET items request
router.get('/', (req, res) => {
	res.json({ items: ITEMS });
});

// router.get('/:id', (req, res) => {
// 	// +req.params.id returns a string so the plus sign is a unary operator which turns it into a number
// 	const item = ITEMS.find((i) => i.id === +req.params.id);
// 	res.json({ item });
// });

// GET name request
router.get('/:name', (req, res) => {
	const item = ITEMS.find((i) => i.name === req.params.name);
	res.json({ item });
});

// POST items request
router.post('/', (req, res) => {});

// PATCH items request
router.patch('/:name', (req, res) => {});

// DELETE request
router.delete('/:name', (req, res) => {
	// (`Your item ${ITEM} was deleted`)
});

module.exports = router;
