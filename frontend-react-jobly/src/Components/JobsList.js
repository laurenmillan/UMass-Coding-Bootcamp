import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

/** Renders a list of all jobs.
 * 
 * -Page displays navbar that renders the Companies, Jobs, Profile, Log Out routes.
 * -Props: 
 *
 */

function JobsList() {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Jobs List</h1>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default JobsList;
