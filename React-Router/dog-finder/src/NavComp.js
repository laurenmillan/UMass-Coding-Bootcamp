import React from 'react';
import { BrowserRouter, NavLink, Link, Router } from 'react-router-dom';
import DogInfo from './DogInfo';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavComp = () => {
	return (
		<div>
			<Navbar bg="dark" variant={'dark'} expand="lg">
				<Navbar.Brand as={Link} to={`/dogs`}>
					Dog Finder
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to={`/dogs`}>
							Home
						</Nav.Link>
						<Nav.Link as={Link}>About</Nav.Link>

						{DogInfo.dogs.map((dog) => (
							<Nav.Link as={Link} to={`/dogs/${dog.name}`} key={dog.name}>
								{dog.name}
							</Nav.Link>
						))}

						<NavDropdown title="See More!" id="nav-dropdown">
							<NavDropdown.Item as={Link}>Contact</NavDropdown.Item>
							<NavDropdown.Item as={Link}>Donate</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item as={Link}>Whiskey</NavDropdown.Item>
							<NavDropdown.Item as={Link}>Duke</NavDropdown.Item>
							<NavDropdown.Item as={Link}>Perry</NavDropdown.Item>
							<NavDropdown.Item as={Link}>Tubby</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavComp;
