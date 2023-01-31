process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let testCompany;
beforeEach(async () => {
	const result = await db.query(
		`INSERT INTO companies (code, name, description) VALUES ('motorolla', 'Motorolla', 'Maker of phones') RETURNING code, name, description`
	);
	testCompany = result.rows[0];
});

// this will delete a company from the companies table after each test finishes
afterEach(async () => {
	await db.query(`DELETE FROM companies`);
});

// we put this here to stop connection to db due to the async operation
afterAll(async () => {
	await db.end();
});

// test to get list of one company
describe('GET /companies', () => {
	test('Get a list with one company', async () => {
		const res = await request(app).get('/companies');
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ companies: [ testCompany ] });
	});
});

// test to get single company
describe('GET /companies/:code', () => {
	test('Get a single company', async () => {
		const res = await request(app).get('/companies');
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ companies: [ testCompany ] });
	});
	test('Responds with 404 for invalid code', async () => {
		const res = await request(app).get(`/companies/yoyo`);
		expect(res.statusCode).toBe(404);
	});
});

// test to add new company
describe('POST /companies', () => {
	test('Adds a single company', async () => {
		const res = await request(app)
			.post('/companies')
			.send({ code: 'google', name: 'Google', description: 'Search engine' });
		expect(res.statusCode).toBe(201);
		expect(res.body).toEqual({
			company: { code: 'google', name: 'Google', description: 'Search engine' }
		});
	});
});

// test to update single company
describe('PATCH /companies/:code', () => {
	test('Updates a single company', async () => {
		const res = await request(app)
			.patch(`/companies/${testCompany.code}`)
			.send({ code: 'google', name: 'Google', description: 'Search engine' });
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({
			company: { code: testCompany.code, name: 'Google', description: 'Search engine' }
		});
	});
	test('Responds with 404 for invalid code', async () => {
		const res = await request(app).patch(`/companies/yoyo`).send({
			code: 'google',
			name: 'Google',
			description: 'Search engine'
		});
		expect(res.statusCode).toBe(404);
	});
});

// test to delete single company
describe('DELETE /companies/:code', () => {
	test('Deletes a single company', async () => {
		const res = await request(app).delete(`/companies/${testCompany.code}`);
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ msg: 'Deleted!' });
	});
});
