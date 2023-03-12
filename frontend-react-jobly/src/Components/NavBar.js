import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

/** Displays navbar components.
 * 
 * -
 * -props: user and logout, passed down from the App component.
 * -user represents current user
 * -logout is a function that logs the user when called.
 * 
*/

function NavBar({ user, logout }) {
	return (
		<div>
			<Navbar expand="md">
				<NavLink exact to="/" className="navbar-brand">
					Jobly
				</NavLink>
				{/* if user is logged in, show Companies, Jobs, Profile and Logout on navbar */}
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink to="/companies">Companies</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/jobs">Jobs</NavLink>
					</NavItem>

					{user ? (
						<>
							<NavItem>
								<NavLink to="/profile">Profile</NavLink>
							</NavItem>

							<NavItem>
								<NavLink to="/" onClick={logout}>
									Log out
								</NavLink>
							</NavItem>
						</>
					) : (
						// otherwise, show Login and Signup on navbar
						<>
							<NavItem>
								<NavLink to="/login">Log in</NavLink>
							</NavItem>

							<NavItem>
								<NavLink to="/signup">Sign Up</NavLink>
							</NavItem>
						</>
					)}
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
