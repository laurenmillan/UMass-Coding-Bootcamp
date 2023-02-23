import React from 'react';
import './Madlib.css';

/** Displays Madlib words.
 * 
 * Props: noun, noun2, adjective, color
 *
 **/

const Madlib = ({ noun, noun2, adjective, color }) => {
	const MadlibStyle = {
		noun: `${noun}`,
		noun2: `${noun2}`,
		adjective: `${adjective}`,
		color: `${color}`
	};

	return <div style={MadlibStyle} />;
};

export default Madlib;
