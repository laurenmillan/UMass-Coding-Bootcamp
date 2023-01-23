// NODE_ENV sets an environment variable, which can be set to production, development or test
process.env.NODE_ENV = 'test';

const request = require('supertest');

const app = require('./app');
let items = require('./fakeDb');

let cheerios = { name: 'cheerios' };

// before each test, we push cheerios into the items array
beforeEach(() => {
	items.push(cheerios);
});

// this clears the contents of the db - it resets it by setting it to 0
afterEach(() => {
	items.length = 0;
});

//**** Testing ****/

// we want to test all items
// we want to test when a single item is successfully found and when it is not found
// we want to test when a single item is successfully deleted and what happens if it's not found
// we want to test adding an item

describe('GET /items', () => {
	test('Get all items', async () => {
		const res = await request(app).get('/items');
		expect(res.statusCode).toBe(200);
		// we're expecting to get back a json object
		// here we're comparing the object, not the reference
		expect(res.body).toEqual({ items: [ cheerios ] });
	});
});

describe('GET /items/:name', () => {
	test('Get item by name', async () => {
		const res = await request(app).get(`/items/${cheerios.name}`);
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ item: cheerios });
	});
	test('Responds with 404 for invalid name', async () => {
		const res = await request(app).get(`/items/milk`);
		expect(res.statusCode).toBe(404);
	});
});

describe('POST /items', () => {
	test('Creating an item', async () => {
		const res = await request(app).post('/items').send({ name: 'popsicle' });
		expect(res.statusCode).toBe(201);
		expect(res.body).toEqual({ item: { name: 'popsicle' } });
	});
	test('Responds with 400 if name is missing', async () => {
		const res = await request(app).post('/items').send({});
		expect(res.statusCode).toBe(400);
	});
});

describe('/PATCH /items/:name', () => {
	test('Editing an item name', async () => {
		const res = await request(app).patch(`/items/${cheerios.name}`).send({ name: 'soda' });
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ item: { name: 'soda' } });
	});
	test('Responds with 404 for invalid name', async () => {
		const res = await request(app).patch(`/items/sodyy`).send({ name: 'soda' });
		expect(res.statusCode).toBe(404);
	});
});

describe('/DELETE /items/:name', () => {
	test('Deleting an item', async () => {
		const res = await request(app).delete(`/items/${cheerios.name}`);
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ message: 'Your item was deleted!' });
	});
	test('Responds with 404 for deleting invalid item', async () => {
		const res = await request(app).delete(`/items/cheese`);
		expect(res.statusCode).toBe(404);
	});
});
