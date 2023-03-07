import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

/** Renders a Login page.
 * 
 * -Page displays navbar that renders the Login, Sign Up routes.
 * -Props: 
 *
 */

function Login() {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Log In</h1>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default Login;
