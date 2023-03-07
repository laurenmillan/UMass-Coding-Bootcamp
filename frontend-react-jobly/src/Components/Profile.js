import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

/** Renders a Profile page.
 * 
 * -Renders a form that will allow user to update First Name, Last Name, Email.
 * -Page displays navbar that renders the Companies, Jobs, Profile, Log Out routes.
 * -Props: 
 *
 */

function Profile() {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Profile</h1>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default Profile;
