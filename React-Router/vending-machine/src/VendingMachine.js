import React from 'react';
import { NavLink } from 'react-router-dom';
import './VendingMachine.css';

/** VendingMachine component. 
 * 
 * - Shows a page with a list of snacks that you can get from the vending machine. 
 * 
 */

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<h1 className="title">Choose Your Snack! </h1>

			<div className="choices">
				<ul>
					<li>
						<NavLink to="/LifeSavers">LifeSavers</NavLink>
					</li>
					<li>
						<NavLink to="/Skittles">Skittles</NavLink>
					</li>
					<li>
						<NavLink to="/Starburst">Starburst</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default VendingMachine;
