import React, { useState } from 'react';

/** Todo App that allows user to see, add, edit, and remove todos.
 *
 * State: formData, setFormData
 * Props: addItem
 *
 * - this component should render a form with one text input for the task to be created.
 * - When this form is submitted, a new Todo component should be created.
 * - Todo- this component should display a div with the task of the todo.
 * - For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.
 *
 **/

const NewTodoForm = ({ addItem }) => {
	const INITIAL_STATE = {
		name: ''
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addItem(formData.name);
		// resets form back to initial state
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Todo</label>
			<input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodoForm;
