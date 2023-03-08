import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api/api';
// import JobCardList from '../jobs/JobCardList';

/** Company detail page.
 * 
 * -Renders cards that display job details for the specific company, with an Apply button.
 * -props: `handle` is used to fetch the specific company details from the API.
 * -props: `company` is set to null, then later updated with the specific company details from the API.
 * -Routed at /companies/:handle
 *
 */

function CompanyDetail() {
	console.debug('CompanyDetail');

	const { handle } = useParams();
	const [ company, setCompany ] = useState(null);

	useEffect(
		function getCompanyAndJobs() {
			async function getCompany() {
				setCompany(await JoblyApi.getCompany(handle));
			}
			getCompany();
		},
		[ handle ]
	);

	return (
		<div className="CompanyDetail col-md-8 offset-md-2">
			{company ? (
				<div>
					<h4>{company.name}</h4>
					<p>{company.description}</p>
					{/* <JobCardList jobs={company.jobs} /> */}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default CompanyDetail;
