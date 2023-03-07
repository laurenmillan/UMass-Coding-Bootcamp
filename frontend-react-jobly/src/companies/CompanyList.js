import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import JoblyApi from '../api/api';

/** Renders a list of all companies.
 * 
 * -Routed at /companies
 *
 */

function CompanyList() {
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
			<h1>Companies</h1>
			<ul>{companies.map((company) => <li key={company.handle}>{company.name}</li>)}</ul>
		</div>
	);
}

export default CompanyList;
