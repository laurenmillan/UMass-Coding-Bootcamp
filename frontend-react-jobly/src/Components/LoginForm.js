import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/** Renders a Login Form. 
 * 
 * -When the user successfully logs in, navigate to /companies page.
 * 
*/

const SignupForm = ({ login }) => {
	console.debug('LoginForm');

	const [ isSuccess, setIsSuccess ] = useState(false);
	const [ validated, setValidated ] = useState(false);
	const navigate = useNavigate();
	const [ formData, setFormData ] = useState({ username: '', password: '' });

	useEffect(
		() => {
			if (isSuccess) {
				navigate('/companies', { replace: true });
			}
		},
		[ isSuccess, navigate ]
	);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const form = evt.currentTarget;
		if (form.checkValidity() === false) {
			evt.stopPropagation();
		} else {
			try {
				const res = await login(formData);
				setIsSuccess(res.success);
			} catch (error) {
				console.error(error);
				if (error.response && error.response.status === 409) {
					alert('Incorrect username or password');
				} else {
					alert('An error occurred while logging in');
				}
			}
		}
		setValidated(true);
	};

	return (
		<div className="SignupForm">
			<div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
				<h2 className="mb-3">Log In</h2>
			</div>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Group controlId="formUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						name="username"
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
						name="password"
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
};

export default SignupForm;
