import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api/api';
import JobCardList from '../jobs/JobCardList';

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
				try {
					setCompany(await JoblyApi.getCompany(handle));
				} catch (err) {
					console.error('CompanyDetail getCompany error:', err);
				}
			}
			getCompany();
		},
		[ handle ]
	);

	return (
		<div className="CompanyDetail col-md-8 offset-md-2">
			{company ? (
				<div>
					<h3 style={{ color: 'white', textShadow: '1px 1px black' }}>{company.name}</h3>
					<p style={{ color: 'white', textShadow: '1px 1px black' }}>{company.description}</p>
					<JobCardList jobs={company.jobs} />
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default CompanyDetail;
