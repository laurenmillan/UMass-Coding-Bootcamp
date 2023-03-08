import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/api';
import CompanyCard from './CompanyCard';

/** Renders a list of all companies.
 * 
 * -Routed at /companies
 * -state: useState to create a state variable `companies`
 * -useEffect fetches the list of companies from the API and updates `companies`
 * -props: key, handle, name, description
 *
 */

function CompanyList() {
	console.debug('CompanyList');

	const [ companies, setCompanies ] = useState([]);

	useEffect(() => {
		async function getAllCompanies() {
			const companies = await JoblyApi.getCompanies();
			setCompanies(companies);
		}
		getAllCompanies();
	}, []);

	return (
		<div className="CompanyList col-md-8 offset-md-2">
			{/* <SearchForm searchFor={search} /> */}
			{companies.length ? (
				<div className="CompanyList-list">
					{companies.map((c) => (
						<CompanyCard key={c.handle} handle={c.handle} name={c.name} description={c.description} />
					))}
				</div>
			) : (
				<p className="lead">Sorry, no results were found!</p>
			)}
		</div>
	);
}

export default CompanyList;
