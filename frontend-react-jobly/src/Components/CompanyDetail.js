import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

/** Renders a list of cards that display details about the selected company.
 * 
 * -Each card displays an Apply button.
 * -Page displays navbar that renders the Companies, Jobs, Profile, Log out routes.
 * -Props: 
 *
 */

function CompanyDetail() {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Company Detail</h1>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default CompanyDetail;
