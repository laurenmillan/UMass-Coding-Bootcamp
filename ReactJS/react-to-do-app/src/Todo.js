import React, { useState } from 'react';

function Todo({ todo, handleEdit, handleRemove }) {
	const [ isEditing, setIsEditing ] = useState(false);
	const [ task, setTask ] = useState(todo.task);

	function handleUpdate(event) {
		event.preventDefault();
		handleEdit(todo.id, task);
		setIsEditing(false);
	}

	return (
		<div>
			{isEditing ? (
				<form onSubmit={handleUpdate}>
					<label>
						Task:
						<input type="text" value={task} onChange={(event) => setTask(event.target.value)} />
					</label>
					<button type="submit">Save</button>
				</form>
			) : (
				<div>
					{todo.task}
					<button onClick={() => setIsEditing(true)}>Edit</button>
					<button onClick={() => handleRemove(todo.id)}>X</button>
				</div>
			)}
		</div>
	);
}

export default Todo;
