import React, { useState } from 'react';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

/** Color Box Maker.
 *
 * State: boxes, setBoxes
 * Props: addBox, width, height, color
 *
 * - contains all of the boxes
 * - should render all of the Box components along
 *      with the NewBoxForm component
 *
 **/

// initial value of boxes is an empty array, so it can be updated
const BoxList = () => {
	const [ boxes, setBoxes ] = useState([]);

	// this function takes formData as an argument, it creates a new array to copy existing boxes array
	const addBox = (formData) => {
		// setBoxes is called with the new array to update State
		setBoxes((boxes) => [ ...boxes, formData ]);
	};

	// removeBox takes index as an argument - the index of the box to be removed from the boxes array
	const removeBox = (index) => {
		// newBoxes creates a new array by using filter by index
		const newBoxes = boxes.filter((box, i) => i !== index);
		// setBoxes is called with the newBoxes array to update State
		setBoxes(newBoxes);
	};

	// form to create new boxes using the NewBoxForm component and addBox as its prop
	// map iterates over the boxes array and renders a Box component for each element in the array
	//  and is giving width, height, color as props, with a key using the array index
	return (
		<div className="BoxList">
			<NewBoxForm addBox={addBox} />
			{boxes.map((box, i) => (
				<Box key={i} width={box.width} height={box.height} color={box.color} removeBox={() => removeBox(i)} />
			))}
		</div>
	);
};

export default BoxList;
