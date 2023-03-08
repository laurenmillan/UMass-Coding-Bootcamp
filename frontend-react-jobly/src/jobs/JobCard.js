import React from 'react';
import './JobCard.css';

/** Renders a card that displays information about a job.
 *
 * -JobCard is rendered by JobList to show a card for each job.
 * -props: id, title, salary, equity, companyName
 * -Routed from JobCardList -> JobCard
 * 
 */

function JobCard({ id, title, salary, equity, companyName }) {
	console.debug('JobCard');

	return (
		<div className="JobCard card">
			<div className="card-body">
				<h6 className="card-title">{title}</h6>
				<p>{companyName}</p>
			</div>
		</div>
	);
}

export default JobCard;
