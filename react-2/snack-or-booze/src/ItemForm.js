import React from 'react';
import { useState } from 'react';
import './ItemForm.css';

/** Renders an Item Form.
 * 
 * -Allows user to add a snack or drink item.
 * 
 * props: setData
 * 
 */

function ItemForm({ setData = () => {} }) {
	const [ formData, setFormData ] = useState({
		item: 'snack',
		name: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setData(formData);
	};

	return (
		<div className="ItemForm">
			<form onSubmit={handleSubmit}>
				<label htmlFor="item">Select: </label>
				<select onChange={handleChange} id="item" name="item" defaultValue="snack">
					<option value="snack">Snack</option>
					<option value="drink">Drink</option>
				</select>

				<br />

				<label htmlFor="name">Item Name: </label>
				<input
					type="text"
					placeholder="Snack or Drink"
					onChange={handleChange}
					id="name"
					name="name"
					value={formData.name}
				/>

				<br />

				<button>Add Item! </button>
			</form>
		</div>
	);
}

export default ItemForm;
