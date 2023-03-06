import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
	// the token for interactive with the API will be stored here.
	static token;

	static async request(endpoint, data = {}, method = 'get') {
		console.debug('API Call:', endpoint, data, method);

		//there are multiple ways to pass an authorization token, this is how you pass it in the header.
		//this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
		const url = `${BASE_URL}/${endpoint}`;
		const headers = { Authorization: `Bearer ${JoblyApi.token}` };
		const params = method === 'get' ? data : {};

		try {
			return (await axios({ url, method, data, params, headers })).data;
		} catch (err) {
			console.error('API Error:', err.response);
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [ message ];
		}
	}

	// Individual API routes

	/** Get details on a company by handle. */

	static async getCompany(handle) {
		let res = await this.request(`companies/${handle}`);
		return res.company;
	}

	/** Get all companies. */

	static async getCompanies() {
		let res = await this.request(`companies`);
		return res.companies;
	}

	/** Get all jobs. */

	static async getJobs() {
		let res = await this.request(`jobs`);
		return res.jobs;
	}

	/** Search for a single company. */

	static async searchCompanies(term) {
		let res = await this.request(`companies?nameLike=${term}`);
		return res;
	}

	/** Search for a single job. */

	static async searchJob(term) {
		let res = await this.request(`jobs?nameLike=${term}`);
		return res;
	}

	/** Login. */

	static async logIn(username, password) {
		let res = await this.request('auth/token', { username, password }, 'post');
		return res;
	}

	/** Get a single user's info. */

	static async getUser(username) {
		let res = await this.request(`users/${username}`, {}, 'get');
		return res;
	}

	/** Sign Up. */

	static async signUp(formData) {
		let res = await this.request(`auth/register`, formData, 'post');
		return res;
	}

	/** Edit a single user's info. */

	static async editUser(formData) {
		const { username, email, firstName, lastName } = formData;
		let res = await this.request(`users/${username}`, { email, firstName, lastName }, 'patch');
		return res;
	}

	/** Apply to job. */

	static async apply(username, jobid) {
		let res = await this.request(`users/${username}/jobs/${jobid}`, {}, 'post');
		return res;
	}
}

export default JoblyApi;

// for now, put token ("testuser" / "password" on class)
JoblyApi.token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ' +
	'SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.' +
	'FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc';
