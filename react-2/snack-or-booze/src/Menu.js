import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

function Menu({ snacks }) {
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">Menu</CardTitle>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<ListGroup>
						{snacks.map((snack) => (
							<Link to={`/snacks/${snack.id}`} key={snack.id}>
								<ListGroupItem>{snack.name}</ListGroupItem>
							</Link>
						))}
					</ListGroup>
				</CardBody>
			</Card>
		</section>
	);
}

export default Menu;
