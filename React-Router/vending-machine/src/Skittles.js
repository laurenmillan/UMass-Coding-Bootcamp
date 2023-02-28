import React from 'react';
import { NavLink } from 'react-router-dom';

const Skittles = () => {
	return (
		<div className="Skittles">
			<div>🍬</div>
			<NavLink to="/">Go Back</NavLink>
		</div>
	);
};

export default Skittles;
