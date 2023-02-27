import React from 'react';
import { BrowserRouter, NavLink, Link, Router } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavComp = () => {
	return (
		<div>
			<h1>Welcome to the Color Factory! </h1>
			<Navbar bg="dark" variant={'dark'} expand="lg">
				<Navbar.Brand as={Link} to={`/colors`}>
					Add a Color
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to={`/colors`}>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to={`/red`}>
							Red
						</Nav.Link>
						<Nav.Link as={Link} to={`/green`}>
							Green
						</Nav.Link>
						<Nav.Link as={Link} to={`/blue`}>
							Blue
						</Nav.Link>

						{/* {DogInfo.dogs.map((dog) => (
							<Nav.Link as={Link} to={`/dogs/${dog.name}`} key={dog.name}>
								{dog.name}
							</Nav.Link>
						))} */}

						<NavDropdown title="See More!" id="nav-dropdown">
							<NavDropdown.Item as={Link}>Contact</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item as={Link}>Link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavComp;