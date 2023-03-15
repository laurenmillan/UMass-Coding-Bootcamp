import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

/** Displays navbar components.
 * 
 * -props: user and logout, passed down from the App component.
 * -user represents current user
 * -logout is a function that logs out the user when called.
 * 
*/

function NavBar({ user, logout }) {
  console.debug({user})
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <Nav className="ml-auto" navbar>
          {/* if user is not logged in, render /login, /signup */}
          {!user ? (
            <>
              <NavItem>
                <NavLink to="/login">Log in</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/signup">Sign Up</NavLink>
              </NavItem>
            </>
          ) : (
            // user is logged in, show all links in navbar.
            <>
              <NavItem>
                <NavLink to="/companies">Companies</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/jobs">Jobs</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/profile">Profile</NavLink>
              </NavItem>


              <NavItem>
                <NavLink to="/" onClick={logout}>
                  Log out
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}


export default NavBar;
