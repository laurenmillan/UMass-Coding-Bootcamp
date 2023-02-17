import React, { useState } from 'react';
import './NewBoxForm.css';

/** 
 *
 * - this component should render a form that when submitted, creates a new Box. 
 * - You should be able to specify the Box’s width, height, and background color. 
 * - When the form is submitted, clear the input values.
 *
 **/

const NewBoxForm = () => {
	return (
		<form>
			<input type="text" />
			<button>Submit!</button>
		</form>
	);
};

export default NewBoxForm;
