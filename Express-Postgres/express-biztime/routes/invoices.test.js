process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let testInvoice;
let testCompany;

beforeEach(async () => {
	const companyResult = await db.query(
		`INSERT INTO companies (code, name, description) VALUES ('motorolla', 'Motorolla', 'Maker of phones') RETURNING code, name, description`
	);
	const invoiceResult = await db.query(
		`INSERT INTO invoices (comp_code, amt) VALUES ('motorolla', '200') RETURNING comp_code, amt`
	);
	testCompany = companyResult.rows[0];
	testInvoice = invoiceResult.rows[0];
});

// this will delete a company from the companies table after each test finishes
afterEach(async () => {
	await db.query(`DELETE FROM invoices`);
	await db.query(`DELETE FROM companies`);
});

// we put this here to stop connection to db due to the async operation
afterAll(async () => {
	await db.end();
});

describe('GET /invoices/', () => {
	test('Get a list with one invoice', async () => {
		const res = await request(app).get('/invoices/');
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ invoices: [ testInvoice ] });
	});
});

describe('GET /invoices/:id', () => {
	test('Get a single invoice', async () => {
		const res = await request(app).get('/invoices');
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ invoices: [ testInvoice ] });
	});
});

describe('POST /invoices', () => {
	test('Adds a single invoice', async () => {
		const res = await request(app).post('/invoices/').send({ comp_code: 'google', amt: '300' });
		expect(res.statusCode).toBe(201);
		expect(res.body.invoice.amt).toEqual(300);
		expect(res.body.invoice.comp_code).toEqual('google');
	});
});

describe('PATCH /invoices/:id', () => {
	test('Updates a single invoice', async () => {
		const res = await request(app).patch(`/invoices/${testInvoice.id}`).send({ amt: 200, paid: 'true' });
		expect(res.statusCode).toBe(200);
		expect(res.body.invoice.amt).toEqual(200);
		expect(res.body.invoice.paid_date).toEqual(expect.any(String));
	});
	test('Responds with 404 for invalid id', async () => {
		const res = await request(app).patch(`/invoices/${testInvoice.id}`);
		expect(res.statusCode).toBe(404);
	});
});

describe('DELETE /invoices/:id', () => {
	test('Deletes a single invoice', async () => {
		const res = await request(app).delete(`/invoices/${testInvoice.id}`);
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ msg: 'Deleted!' });
	});
});
