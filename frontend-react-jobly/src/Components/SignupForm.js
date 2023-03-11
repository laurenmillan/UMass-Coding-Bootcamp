import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/** Renders a Signup Form. */

const SignupForm = ({ signup }) => {
	const navigate = useNavigate();
	const [ formData, setFormData ] = useState({ username: '', password: '', firstName: '', lastName: '', email: '' });

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const res = await signup(formData);
			res.success ? navigate('/companies', { replace: true }) : alert('An error occurred while signing up');
		} catch (error) {
			console.error(error);
			alert('An error occurred while signing up');
		}
	};

	return (
		<div className="SignupForm">
			<div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
				<h2 className="mb-3">Sign Up</h2>
			</div>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						value={formData.username}
						onChange={handleChange}
						autoComplete="username"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={formData.password}
						onChange={handleChange}
						autoComplete="current-password"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formFirstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" value={formData.firstName} onChange={handleChange} required />
				</Form.Group>

				<Form.Group controlId="formLastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" value={formData.lastName} onChange={handleChange} required />
				</Form.Group>

				<Form.Group controlId="formEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" value={formData.email} onChange={handleChange} required />
				</Form.Group>

				<Button variant="primary" type="submit">
					Sign Up
				</Button>
			</Form>
		</div>
	);
};

export default SignupForm;
