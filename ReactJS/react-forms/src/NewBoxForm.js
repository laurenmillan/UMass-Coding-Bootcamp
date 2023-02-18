import React, { useState } from 'react';
import './NewBoxForm.css';

/** Renders form to add new boxes to the list of boxes
 * 
 * State: formData, setFormData
 * Props: addBox
 *
 * - this component should render a form that when submitted, creates a new Box. 
 * - You should be able to specify the Box’s width, height, and background color. 
 * - When the form is submitted, clear the input values.
 *
 **/

// NewBoxForm takes addBox as a prop, addBox is a function that is called on form submission to add new box to the BoxList component
const NewBoxForm = ({ addBox }) => {
	// initial state of the form is set to an object with empty strings
	const initialState = {
		width: '',
		height: '',
		color: ''
	};

	// useState manages the form data
	const [ formData, setFormData ] = useState(initialState);

	// handleChange handles the user inputs in the form, updating form data state with the inputs using setFormData,
	//      merging the current form with the new form data using the spread operator
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	// handles form submission, calls the addBox function, resets form data to its inital state
	const handleSubmit = (e) => {
		e.preventDefault();
		addBox(formData);
		setFormData(initialState);
		// alert(`Added a ${formData.color} box`);
	};

	// when the user clicks the button, the form is submitted and the handleSubmit function is called
	//      and calls addBox function and resets the form to its initial state
	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="width">Width:</label>
			<input type="text" id="width" name="width" value={formData.width} onChange={handleChange} />
			<br />
			<label htmlFor="height">Height:</label>
			<input type="text" id="height" name="height" value={formData.height} onChange={handleChange} />
			<br />
			<label htmlFor="color">Color:</label>
			<input type="text" id="color" name="color" value={formData.color} onChange={handleChange} />
			<br />
			<button className="button" type="submit">
				Add Box
			</button>
		</form>
	);
};

export default NewBoxForm;
