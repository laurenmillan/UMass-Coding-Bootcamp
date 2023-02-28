import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ColorForm.css';

const ColorForm = ({ addColor }) => {
	const navigate = useNavigate();
	const [ name, setName ] = useState('');
	const [ value, setValue ] = useState('#000000');

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ name, value });
		setName('');
		setValue('#000000');
		navigate('/colors');
	};

	return (
		<div>
			<h1>Add a color</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Color name: </label>
					<br />
					<input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<label htmlFor="value">Value: </label>
					<br />
					<input
						id="value"
						name="value"
						type="color"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
				<br />
				<button type="submit">Submit</button>
			</form>
			<br />
			<Link to="/colors">Back to color list</Link>
		</div>
	);
};

export default ColorForm;
