import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

/** Renders a list of all companies.
 * 
 * -Routed at /companies
 * -Props: 
 *
 */

function CompanyList() {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Company List</h1>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default CompanyList;
