import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

<<<<<<< HEAD
function Home() {
=======
function Home({ snacks, drinks }) {
>>>>>>> 1ed26b6bc4752d1c6145be2b6539c18bb15a4604
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">Welcome to Silicon Valley's premier dive cafe!</h3>
<<<<<<< HEAD
=======
						<p>
							Serving {snacks.length} & {drinks.length} items!
						</p>
>>>>>>> 1ed26b6bc4752d1c6145be2b6539c18bb15a4604
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
}

export default Home;
