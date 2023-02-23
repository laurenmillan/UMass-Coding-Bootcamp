import React, { useState } from 'react';
import './NewMadlibForm.css';
// import Button from '@mui/material/Button';

/** Renders form to add new Madlib to the list of Madlibs
 * 
 * State: formData, setFormData
 * Props: addMadlib
 *
 * - this component should render a form that when submitted, creates a new Madlib word. 
 * - You should be able to specify the Madlibs’s noun, noun2, adjective, and color. 
 * - When the form is submitted, clear the input values.
 *
 **/

// NewMadlibForm takes addMadlib as a prop, addMadlib is a function that is called on form submission to add new Madlib words to the MadlibList component
const NewMadlibForm = ({ addMadlib }) => {
	// initial state of the form is set to an object with empty strings
	const initialState = {
		noun: '',
		noun2: '',
		adjective: '',
		color: ''
	};

	// useState manages the form data
	const [ formData, setFormData ] = useState(initialState);

	// handleChange manages the user inputs in the form, updating the form data state with the inputs using setFormData,
	//		merging the current form with the new form data using the spread operator
	const handleChange = (e) => {
		// console.log(e.target.value);
		// console.log(e.target.value);
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	// handles form submission, calls the addMadlib function, resets form data to its intial state
	const handleSubmit = (e) => {
		e.preventDefault();
		addMadlib(formData);
		setFormData(initialState);
	};

	// when the user clicks the button, the form is submitted and the handleSubmit function is called
	//		and calls the addMadlib function and resets the form to its initial state
	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="noun">Noun:</label>
			<input type="text" id="noun" name="noun" value={formData.noun} onChange={handleChange} />
			<br />

			<label htmlFor="noun2">Noun2:</label>
			<input type="text" id="noun2" name="noun2" value={formData.noun2} onChange={handleChange} />
			<br />
			<label htmlFor="adjective">Adjective:</label>
			<input type="text" id="adjective" name="adjective" value={formData.adjective} onChange={handleChange} />
			<br />

			<label htmlFor="color">Color:</label>
			<input type="text" id="color" name="color" value={formData.color} onChange={handleChange} />
			<br />

			<button className="button" type="submit">
				Get Story!
			</button>
		</form>
	);
};

export default NewMadlibForm;
