import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './404.css';

const NotFound = () => {
	return (
		<section className="col-md-8 NotFound">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">Page does not exist.</h3>
						<p>Navigate to one of these pages: </p>
						<Link to="/home">Home</Link>
						<Link to="/snacks">Snacks</Link>
						<Link to="/drinks">Drinks</Link>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
};

export default NotFound;
