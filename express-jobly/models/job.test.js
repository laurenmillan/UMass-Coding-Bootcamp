'use strict';

const db = require('../db.js');
const { BadRequestError, NotFoundError } = require('../expressError');
const Job = require('./job.js');
const { commonBeforeAll, commonBeforeEach, commonAfterEach, commonAfterAll, testJobIds } = require('./_testCommon');

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** create */

describe('create', function() {
	const newJob = {
		companyHandle: 'c1',
		title: 'Test',
		salary: 200,
		equity: '0.2'
	};

	test('works', async function() {
		let job = await Job.create(newJob);
		expect(job).toEqual({
			...newJob,
			id: expect.any(Number)
		});
	});
});

/************************************** findAll */

describe('findAll', function() {
	test('works: no filter', async function() {
		let jobs = await Job.findAll();
		expect(jobs).toEqual([
			{
				id: testJobIds[1],
				title: 'Job1',
				salary: 1,
				equity: '0.1',
				companyHandle: 'c1'
			},
			{
				id: testJobIds[2],
				title: 'Job2',
				salary: 2,
				equity: '0.2',
				companyHandle: 'c2'
			},
			{
				id: testJobIds[3],
				title: 'Job3',
				salary: 3,
				equity: '0.3',
				companyHandle: 'c3'
			}
		]);
	});

	test('works: by min salary', async function() {
		let jobs = await Job.findAll({ minSalary: 1 });
		expect(jobs).toEqual([
			{
				id: testJobIds[1],
				title: 'Job1',
				salary: 1,
				equity: '0.1',
				companyHandle: 'c1'
			}
		]);
	});

	test('works: by equity', async function() {
		let jobs = await Job.findAll({ hasEquity: true });
		expect(jobs).toEqual([
			{
				id: testJobIds[1],
				title: 'Job1',
				salary: 1,
				equity: '0.1',
				companyHandle: 'c1'
			},
			{
				id: testJobIds[2],
				title: 'Job2',
				salary: 2,
				equity: '0.2',
				companyHandle: 'c1'
			}
		]);
	});

	test('works: by min salary & equity', async function() {
		let jobs = await Job.findAll({ minSalary: 150, hasEquity: true });
		expect(jobs).toEqual([
			{
				id: testJobIds[1],
				title: 'Job2',
				salary: 2,
				equity: '0.2',
				companyHandle: 'c1'
			}
		]);
	});

	test('works: by name', async function() {
		let jobs = await Job.findAll({ title: 'ob1' });
		expect(jobs).toEqual([
			{
				id: testJobIds[1],
				title: 'Job1',
				salary: 1,
				equity: '0.1',
				companyHandle: 'c1'
			}
		]);
	});
});

/************************************** get */

describe('get', function() {
	test('works', async function() {
		let job = await Job.get(testJobIds[1]);
		expect(job).toEqual({
			id: testJobIds[1],
			title: 'Job1',
			salary: 100,
			equity: '0.1',
			company: {
				handle: 'c1',
				name: 'C1',
				description: 'Desc1',
				numEmployees: 1,
				logoUrl: 'http://c1.img'
			}
		});
	});

	test('not found if no such job', async function() {
		try {
			await Job.get(0);
			fail();
		} catch (err) {
			expect(err instanceof NotFoundError).toBeTruthy();
		}
	});
});

/************************************** update */

describe('update', function() {
	let updateData = {
		title: 'New',
		salary: 500,
		equity: '0.5'
	};
	test('works', async function() {
		let job = await Job.update(testJobIds[1], updateData);
		expect(job).toEqual({
			id: testJobIds[1],
			companyHandle: 'c1',
			...updateData
		});
	});

	test('not found if no such job', async function() {
		try {
			await Job.update(0, {
				title: 'test'
			});
			fail();
		} catch (err) {
			expect(err instanceof NotFoundError).toBeTruthy();
		}
	});

	test('bad request with no data', async function() {
		try {
			await Job.update(testJobIds[1], {});
			fail();
		} catch (err) {
			expect(err instanceof BadRequestError).toBeTruthy();
		}
	});
});

/************************************** remove */

describe('remove', function() {
	test('works', async function() {
		await Job.remove(testJobIds[1]);
		const res = await db.query('SELECT id FROM jobs WHERE id=$1', [ testJobIds[1] ]);
		expect(res.rows.length).toEqual(0);
	});

	test('not found if no such job', async function() {
		try {
			await Job.remove(0);
			fail();
		} catch (err) {
			expect(err instanceof NotFoundError).toBeTruthy();
		}
	});
});
