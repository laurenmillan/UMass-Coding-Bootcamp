import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './ColorDetail.css';

const ColorDetail = ({ colors, match }) => {
	const color = colors.find((c) => c.name === match.params.color);
	if (!color) {
		return <Navigate to="/colors" />;
	}
	return (
		<div>
			<h1>{color.name}</h1>
			<div style={{ width: '100px', height: '100px', backgroundColor: color.value }} />
			<Link to="/colors">Back to color list</Link>
		</div>
	);
};

export default ColorDetail;
