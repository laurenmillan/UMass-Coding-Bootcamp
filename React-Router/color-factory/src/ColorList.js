import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
	return (
		<div>
			<h1>Welcome to the Color Factory! </h1>
			<ul>
				{colors.map((color, index) => (
					<li key={index}>
						<Link to={`/colors/${color.name}`}>{color.name}</Link>
					</li>
				))}
			</ul>
			<Link to="/colors/new">Add a color</Link>
		</div>
	);
};

export default ColorList;
