import React from 'react';
import './JobCard.css';
import { FormatMoney } from 'format-money-js';

/** Renders a card that displays information about a job.
 *
 * -JobList renders Jobcard which displays a card for each job.
 * -props: id, title, salary, equity, companyName
 * -Receives the apply function prop from the parent which is called on apply.
 * -Routed from JobCardList -> JobCard
 * 
 */

function JobCard({ id, title, salary, equity, companyName }) {
	console.debug('JobCard');

	const fm = new FormatMoney({
		decimals: 2
	});
	let dollarAmt = fm.from(salary, { symbol: '$' });

	return (
		<div className="JobCard card">
			<div className="card-body">
				<div className="job-details mb-2">
					<h5 className="card-title">{title}</h5>
					<p>{companyName}</p>
					<small>Salary: {salary !== null ? dollarAmt : 'Unavailable'}</small>
					{equity && equity >= 0.01 ? (
						<small>
							<span>Equity: {`${(equity * 100).toFixed(0)}%`}</span>
						</small>
					) : (
						<small>Equity: Less than 1%</small>
					)}
				</div>
				<div>
					<button className="btn btn-md btn-success" type="submit">
						Apply
					</button>
				</div>
			</div>
		</div>
	);
}

export default JobCard;