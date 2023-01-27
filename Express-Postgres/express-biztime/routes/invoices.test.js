process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let testInvoice;
// let testCompany;

beforeEach(async () => {
	// const companyResult = await db.query(
	// 	`INSERT INTO companies (code, name, description) VALUES ('motorolla', 'Motorolla', 'Maker of phones') RETURNING code, name, description`
	// );
	const invoiceResult = await db.query(
		`INSERT INTO invoices (comp_code, amt) VALUES ('motorolla', '200') RETURNING comp_code, amt`
	);
	// testCompany = companyResult.rows[0];
	testInvoice = invoiceResult.rows[0];
});

// this will delete a company from the companies table after each test finishes
afterEach(async () => {
	await db.query(`DELETE FROM invoices`);
	// await db.query(`DELETE FROM companies`);
});

// we put this here to stop connection to db due to the async operation
afterAll(async () => {
	await db.end();
});

describe('GET /invoices', () => {
	test('Get a list with one invoice', async () => {
		const res = await request(app).get('/invoices');
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ invoices: [ testInvoice ] });
	});
});

// test to get single invoice
describe('GET /invoices/:id', () => {
	test('Get a single invoice', async () => {
		const res = await request(app).get('/invoices');
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ invoices: [ testInvoice ] });
	});
	// test('Responds with 404 for invalid code', async () => {
	// 	const res = await request(app).get(`/invoices/yoyo`);
	// 	expect(res.statusCode).toBe(404);
	// });
});

// // test to add new company
// describe('POST /invoices', () => {
// 	test('Adds a single company', async () => {
// 		const res = await request(app)
// 			.post('/invoices')
// 			.send({ code: 'google', name: 'Google', description: 'Search engine' });
// 		expect(res.statusCode).toBe(201);
// 		expect(res.body).toEqual({
// 			company: { code: 'google', name: 'Google', description: 'Search engine' }
// 		});
// 	});
// });

// // test to update single company
// describe('PATCH /companies/:code', () => {
// 	test('Updates a single company', async () => {
// 		const res = await request(app)
// 			.patch(`/companies/${testCompany.code}`)
// 			.send({ code: 'google', name: 'Google', description: 'Search engine' });
// 		expect(res.statusCode).toBe(200);
// 		expect(res.body).toEqual({
// 			company: { code: testCompany.code, name: 'Google', description: 'Search engine' }
// 		});
// 	});
// 	test('Responds with 404 for invalid code', async () => {
// 		const res = await request(app).patch(`/companies/yoyo`).send({
// 			code: 'google',
// 			name: 'Google',
// 			description: 'Search engine'
// 		});
// 		expect(res.statusCode).toBe(404);
// 	});
// });

// // test to delete single invoice
// describe('DELETE /invoices/:id', () => {
// 	test('Deletes a single company', async () => {
// 		const res = await request(app).delete(`/invoices/${testCompany.code}`);
// 		expect(res.statusCode).toBe(200);
// 		expect(res.body).toEqual({ msg: 'Deleted!' });
// 	});
// });
