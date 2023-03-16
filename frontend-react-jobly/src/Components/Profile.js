import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

import JoblyApi from '../api/api';

/** Renders a Profile page.
 * 
 * -Renders a form that will allow user to update First Name, Last Name, Email.
 * -Props: 
 *    - user: the current user object, containing username and token.
 *    - setCurrentUser: a function to update the current user information in App state.
 * 
 */

function Profile({ user, setCurrentUser }) {
	console.debug('ProfileForm', 'currentUser=', user, 'formData=', user);

	const [formData, setFormData] = useState({
  username: user?.username || "",
  firstName: user?.firstName || "",
  lastName: user?.lastName || "",
  email: user?.email || "",
});


	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	}

	const handleSubmit = async (evt) => {
		console.debug('handleSubmit FormData');

		evt.preventDefault();
		try {
			await JoblyApi.saveProfile(user.username, {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email
			}, user); //pass token prop
			setCurrentUser((data) => ({
				...data,
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email
			}));
		} catch (error) {
			console.error('Failed to save profile:', error);
		}
	};

	return (
		<div className="Profile">
			<h2>Profile</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<FormLabel htmlFor="username">Username: </FormLabel>
					<FormControl type="text" name="username" value={formData.username} disabled readOnly />
				</FormGroup>
				<FormGroup>
					<FormLabel htmlFor="firstName">First Name: </FormLabel>
					<FormControl type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
				</FormGroup>
				<FormGroup>
					<FormLabel htmlFor="lastName">Last Name: </FormLabel>
					<FormControl type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
				</FormGroup>
				<FormGroup>
					<FormLabel htmlFor="email">Email: </FormLabel>
					<FormControl type="text" name="email" value={formData.email} onChange={handleChange} />
				</FormGroup>
				<Button type="submit" variant="primary">
					Save Changes
				</Button>
			</Form>
		</div>
	);
}

export default Profile;
