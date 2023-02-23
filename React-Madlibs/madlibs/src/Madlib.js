import React from 'react';
import './Madlib.css';
import Button from '@mui/material/Button';

/** Displays Madlib words.
 * 
 * Props: noun, noun2, adjective, color
 *
 **/

const Madlib = ({ noun, noun2, adjective, color, resetMadlib }) => {
	const madlibStyle = {
		fontWeight: 'bold'
	};

	return (
		<div style={madlibStyle}>
			<h1>{`The ${adjective} ${noun} jumped over the ${color} ${noun2}.`}</h1>
			<Button variant="contained" onClick={resetMadlib}>
				Reset
			</Button>
		</div>
	);
};

export default Madlib;
