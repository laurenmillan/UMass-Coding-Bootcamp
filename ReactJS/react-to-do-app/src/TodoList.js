import React, { useState } from 'react';
import Item from './Item';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid/v4';

/** Todo App that allows user to see, add, edit, and remove todos.
 *
 * State: items, setItems
 * Props: addItem
 *
 * - this component should render the NewTodoForm component and should render the list of Todo components. 
 * - Place your state that contains all of the todos in this component.
 *
 **/

const TodoList = () => {
	const INITIAL_STATE = [ { id: uuid(), name: 'Feed cat' }, { id: uuid(), name: 'Do laundry' } ];
	const [ items, setItems ] = useState(INITIAL_STATE);

	// this handles form data that is added to State
	const addItem = (newItem) => {
		// this creates a new array based off original items, and adds new item to the array
		setItems((items) => [ ...items, { newItem, id: uuid() } ]);
	};
	return (
		<div>
			<h3>Todo List</h3>
			<NewTodoForm addItem={addItem} />
			<div>{items.map((item) => <Item key={item.id} id={item.id} name={item.name} />)}</div>
		</div>
	);
};

export default TodoList;
