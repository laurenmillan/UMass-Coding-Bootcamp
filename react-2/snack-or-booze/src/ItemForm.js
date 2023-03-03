import React from 'react';
import { useState } from 'react';
import './ItemForm.css';

/** Renders an Item Form.
 * 
 * -Allows user to add a snack or drink item.
 * -Error handling for the handleSubmit function.
 * 
 * props: setData
 * 
 */

function ItemForm({ setData = () => {} }) {
	const [ { item, name }, setFormData ] = useState({ item: 'snack', name: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			if (name === '') {
				alert('You missed some required info. Please try again.');
				return;
			}
			await setData({ item, name });
		} catch (error) {
			console.error(error);
			alert('An error occurred while adding the item. Please try again.');
		}
	};

	return (
		<div className="ItemForm">
			<h2 className="h2">Add Item</h2>
			<form onSubmit={handleSubmit}>
				<label className="SelectInput" htmlFor="item">
					Select:
				</label>
				<select onChange={handleChange} id="item" name="item" defaultValue={item}>
					<option value="snack">Snack</option>
					<option value="drink">Drink</option>
				</select>

				<br />

				<label className="ItemName" htmlFor="name">
					Item Name:
				</label>
				<input
					type="text"
					placeholder="Snack or Drink"
					onChange={handleChange}
					id="name"
					name="name"
					value={name}
					required
				/>

				<br />

				<button type="submit">Submit </button>
			</form>
		</div>
	);
}

export default ItemForm;
