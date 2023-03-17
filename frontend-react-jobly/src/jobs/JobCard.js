import React, { useState, useEffect } from 'react';
import './JobCard.css';
import { FormatMoney } from 'format-money-js';

/** Renders a card that displays information about a job.
 *
 * -JobList renders Jobcard which displays a card for each job.
 * -props: id, title, salary, equity, companyName
 * -Receives the apply function prop from the parent which is called on apply.
 * -Routed from JobCardList -> JobCard
 * -If a user applies to a job, the `Applied` button will persist across page refreshes, store state in local storage.
 * 
 */

function JobCard({ id, title, salary, equity, companyName, applyToJob }) {
	console.debug('JobCard');

	const [ hasApplied, setHasApplied ] = useState(false);

	// Retrieve the applied state from local storage
	useEffect(
		() => {
			const storedAppliedState = localStorage.getItem(`job-${id}-applied`);
			if (storedAppliedState) {
				setHasApplied(JSON.parse(storedAppliedState));
			}
		},
		[ id ]
	);

	async function handleApply() {
		console.debug('Successfully Applied');
		if (hasApplied) return;

		// store in local storage
		await applyToJob(id);
		setHasApplied(true);
		localStorage.setItem(`job-${id}-applied`, JSON.stringify(true));
	}

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
					<button
						className={`btn btn-md ${hasApplied ? 'btn-secondary' : 'btn-success'}`}
						type="submit"
						onClick={handleApply}
						disabled={hasApplied}
					>
						{hasApplied ? 'Applied' : 'Apply'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default JobCard;
