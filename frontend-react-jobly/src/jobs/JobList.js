import React, { useState, useEffect } from 'react';
import Search from '../companies/SearchForm';
import JoblyApi from '../api/api';
import JobCardList from './JobCardList';

/** Renders a list of all jobs.
 *
 * -state: useState to create a state variable `jobs`
 * -useEffect fetches the list of jobs from the API and updates `jobs`
 * -props: 
 * -Displays a SearchForm component that allows user to search for a job.
 * -SearchForm renders a search bar, which is passed the searchFor props to perform the search.
 * -Routed at /jobs
 */

function JobList() {
	console.debug('JobList');

	const [ jobs, setJobs ] = useState([]);

	useEffect(function getAllJobsOnMount() {
		console.debug('JobList useEffect getAllJobsOnMount');
		search();
	}, []);

	/** Triggered by search form submit; reloads jobs. */
	async function search(title) {
		try {
			let jobs = await JoblyApi.getJobs(title);
			setJobs(jobs);
		} catch (err) {
			console.error('JobList search error:', err);
		}
	}

	return (
		<div className="JobList col-md-8 offset-md-2">
			<Search searchFor={search} />
			{jobs.length ? <JobCardList jobs={jobs} /> : <p className="lead">Sorry, no results were found!</p>}
		</div>
	);
}

export default JobList;
