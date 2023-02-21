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

function NewTodoForm({ handleAdd }) {
	const [ task, setTask ] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		const newTodo = { id: Date.now(), task };
		handleAdd(newTodo);
		setTask('');
	}

	function handleChange(event) {
		setTask(event.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Task:
				<input type="text" value={task} onChange={handleChange} />
			</label>
			<button type="submit">Add</button>
		</form>
	);
}

export default NewTodoForm;
