import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api/api';
// import JobCardList from 'JobCardList';

/** Company detail page.
 * 
 * -Renders cards that display company details with an Apply button.
 * -Routed at /companies/:handle
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
