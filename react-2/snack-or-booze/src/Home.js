import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

/** Displays homepage.
 * 
 * -Displays the number of snacks and drinks
 * -Displays navbar.
 *
 */

function Home({ snacks, drinks }) {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">Welcome to Silicon Valley's premier dive cafe!</h3>
						<p>
							There are {snacks.length} snacks and {drinks.length} drinks to choose from!
						</p>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default Home;
