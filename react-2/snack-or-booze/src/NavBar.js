import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

function NavBar() {
	return (
		<div>
			<Navbar expand="md">
				<NavLink exact to="/" className="navbar-brand">
					Snack or Booze
				</NavLink>

				<Nav className="ml-auto" navbar>
					<NavItem>
<<<<<<< HEAD
						<NavLink to="/snacks">Snacks</NavLink>
					</NavItem>
=======
						<NavLink to="/home">Home</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/snacks">Snacks</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/drinks">Drinks</NavLink>
					</NavItem>
>>>>>>> 1ed26b6bc4752d1c6145be2b6539c18bb15a4604
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
