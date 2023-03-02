import React, { useState } from 'react';
import './Contact.css';

/** Renders Contact form.
 * 
*/

const Contact = () => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		message: ''
	});

	const { name, email, message } = formData;

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<section>
			<h2>Contact Us</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<a href="tel:5554280940">Call us at 555-123-4321</a>
				</div>
				<div>
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" name="name" value={name} onChange={handleChange} required />
				</div>
				<div>
					<label htmlFor="email">Email: </label>
					<input type="email" id="email" name="email" value={email} onChange={handleChange} required />
				</div>
				<div>
					<label htmlFor="message">Message: </label>
					<textarea id="message" name="message" value={message} onChange={handleChange} required />
				</div>
				<button type="submit">Send! </button>
			</form>
		</section>
	);
};

export default Contact;
