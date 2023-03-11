import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/** Render Login Form.
 * 
 * -When the user successfully logs in, navigates to /companies page.
 * 
 */

function LoginForm({ login }) {
	const navigate = useNavigate();
	const [ formData, setFormData ] = useState({ username: '', password: '' });

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
			const res = await login(formData);
			res.success ? navigate('/companies', { replace: true }) : alert('Invalid username or password');
		} catch (error) {
			console.error(error);
			alert('An error occurred while logging in');
		}
	};

	return (
		<div className="LoginForm">
			<div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
				<h2 className="mb-3">Login</h2>
			</div>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter username"
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
						placeholder="Enter password"
						value={formData.password}
						onChange={handleChange}
						autoComplete="current-password"
						required
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</div>
	);
}

export default LoginForm;
