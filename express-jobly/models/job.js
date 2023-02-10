'use strict';

const db = require('../db');
const { NotFoundError } = require('../expressError');
const { sqlForPartialUpdate } = require('../helpers/sql');

/** Related functions for jobs. */

class Job {
	/** Create a job (from data), update db, return new job data.
   *
   * data should be { title, salary, equity, company_handle }
   *
   * Returns { id, title, salary, equity, companyHandle }
   * */

	static async create(data) {
		const result = await db.query(
			`INSERT INTO jobs
            (title, salary, equity, company_handle)
            VALUES ($1, $2, $3, $4)
            RETURNING id, title, salary, equity, company_handle AS "companyHandle"`,
			[ data.title, data.salary, data.equity, data.companyHandle ]
		);
		let job = result.rows[0];

		return job;
	}

	/** Find all jobs (optional filter on searchFilters).
   *
   * searchFilters (all optional):
   * - title
   * - minSalary
   * - hasEquity
   *
   * Returns [{ id, title, salary, equity, companyHandle }, ...]
   * */

	static async findAll({ title, minSalary, hasEquity } = {}) {
		let query = `SELECT id,
                        title,
                        salary,
                        equity,
                        company_handle AS "companyHandle"
                    FROM jobs`;
		let whereExpressions = [];
		let queryValues = [];

		// For each possible search term, add to whereExpressions and queryValues so
		// we can generate the right SQL

		if (minSalary !== undefined) {
			queryValues.push(minSalary);
			whereExpressions.push(`salary >= $${queryValues.length}`);
		}

		if (hasEquity === true) {
			whereExpressions.push(`equity > 0`);
		}
		if (title !== undefined) {
			queryValues.push(`%${title}%`);
			whereExpressions.push(`title ILIKE $${queryValues.length}`);
		}

		if (whereExpressions.length > 0) {
			query += ' WHERE ' + whereExpressions.join(' AND ');
		}

		// Finalize query and return results

		query += ' ORDER BY title';
		const jobsRes = await db.query(query, queryValues);

		return jobsRes.rows;
	}

	/** Given a job id, return data about job.
   *
   * Returns { id, title, salary, equity, company_handle, company }
   *   where company is { handle, name, description, numEmployees, logoUrl }
   *
   * Throws NotFoundError if not found.
   **/

	static async get(id) {
		const jobRes = await db.query(
			`SELECT id,
                    title,
                    salary,
                    equity,
                    company_handle AS "companyHandle"
            FROM jobs
            WHERE id = $1`,
			[ id ]
		);

		const job = jobRes.rows[0];

		if (!job) throw new NotFoundError(`No job: ${id}`);

		const companiesRes = await db.query(
			`SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           WHERE handle = $1`,
			[ job.companyHandle ]
		);

		delete job.companyHandle;
		job.company = companiesRes.rows[0];

		return job;
	}

	/** Update job data with `data`.
   *
   * Data can include: {title, salary, equity}
   *
   * Returns {id, title, salary, equity, company_handle}
   *
   * Throws NotFoundError if not found.
   */

	static async update(id, data) {
		const { setCols, values } = sqlForPartialUpdate(data, {});
		const idVarIdx = '$' + (values.length + 1);

		const querySql = `UPDATE jobs 
						SET ${setCols} 
						WHERE handle = ${idVarIdx} 
						RETURNING id, 
                                title, 
                                salary, 
                                equity
                                company_handle AS "companyHandle"`;
		const result = await db.query(querySql, [ ...values, id ]);
		const job = result.rows[0];

		if (!job) throw new NotFoundError(`No job: ${id}`);

		return job;
	}

	/** Delete given job from database; returns undefined.
   *
   * Throws NotFoundError if job not found.
   **/

	static async remove(id) {
		const result = await db.query(
			`DELETE
            FROM jobs
            WHERE id = $1
            RETURNING id`,
			[ id ]
		);
		const job = result.rows[0];

		if (!job) throw new NotFoundError(`No job: ${id}`);
	}
}

module.exports = Job;
