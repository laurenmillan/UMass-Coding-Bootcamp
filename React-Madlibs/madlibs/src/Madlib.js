import React from 'react';
import './Madlib.css';

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
			<p>{`The ${adjective} ${noun} jumped over the ${color} ${noun2}.`}</p>
			<button onClick={resetMadlib}>Reset</button>
		</div>
	);
};

export default Madlib;
