import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

/** Renders a Sign Up page.
 * 
 * -Page displays navbar that renders the Login, Sign Up routes.
 * -Props: 
 *
 */

function Signup() {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Sign Up</h1>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default Signup;
