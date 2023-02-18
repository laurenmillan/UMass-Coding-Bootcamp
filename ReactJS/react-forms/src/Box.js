import React from 'react';
import './Box.css';

/** Displays colored box.
 * 
 * Props: width, height, color, removeBox
 * 
 * - this component should display a div with a background color, 
 *      width and height based on the props passed to it.
 * - When each Box component is displayed, add a button with the text of of “X” next to each Box. 
 * - When this button is clicked, remove that specific box. 
 * - This will require you to pass a function down as props - the button should not be a separate component, 
 *      it should be included in the Box component.
 *
 **/

const Box = ({ width, height, color, removeBox }) => {
	const boxStyle = {
		backgroundColor: color,
		width: `${width}px`,
		height: `${height}px`
	};

	return (
		<div style={boxStyle}>
			<button onClick={removeBox}>X</button>
		</div>
	);
};

export default Box;
