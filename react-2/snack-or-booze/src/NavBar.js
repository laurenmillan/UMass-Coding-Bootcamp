import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

/** Displays navbar components.
 * 
 */

function NavBar() {
	return (
		<div>
			<Navbar expand="md">
				<NavLink exact to="/" className="navbar-brand">
					Snack or Booze
				</NavLink>

				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink to="/">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/contact">Contact</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/add">Add Item</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/snacks">Snacks</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/drinks">Drinks</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
