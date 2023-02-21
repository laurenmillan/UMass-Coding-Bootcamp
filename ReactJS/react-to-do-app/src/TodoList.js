import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

/** Todo App that allows user to see, add, edit, and remove todos.
 *
 * State: todos, setTodos
 * Props: toDo
 *
 * - this component should render the NewTodoForm component and should render the list of Todo components. 
 * - Place your state that contains all of the todos in this component.
 *
 **/

function TodoList() {
	const [ todos, setTodos ] = useState([]);

	function handleAdd(todo) {
		setTodos([ ...todos, todo ]);
	}

	function handleEdit(id, newTask) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, task: newTask };
				} else {
					return todo;
				}
			})
		);
	}

	function handleRemove(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	return (
		<div>
			<NewTodoForm handleAdd={handleAdd} />
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} handleEdit={handleEdit} handleRemove={handleRemove} />
			))}
		</div>
	);
}

export default TodoList;
