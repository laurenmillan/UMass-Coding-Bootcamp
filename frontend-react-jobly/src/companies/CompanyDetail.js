import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api/api';
// import JobCardList from 'JobCardList';

/** Company detail page.
 * 
 * -Renders cards that display company details with an Apply button.
 * -Routed at /companies/:handle
 *
 */

function CompanyDetail() {
	const { handle } = useParams();
	const [ company, setCompany ] = useState(null);

	useEffect(
		function getCompanyAndJobsForUser() {
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
        <>
          <h4>{company.name}</h4>
          <p>{company.description}</p>
          {/* <JobCardList jobs={company.jobs} /> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CompanyDetail;
