import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import JoblyApi from '../api/api';

/** Renders a Profile page.
 * 
 * -Renders a form that will allow user to update First Name, Last Name, Email.
 * -Page displays navbar that renders the Companies, Jobs, Profile, Log Out routes.
 * -Props: 
 *    - user: the current user object, containing username and token.
 *    - updateUser: function to update the current user information in App state
 * 
 */

function Profile({ user, setCurrentUser }) {
	console.debug({ user, setCurrentUser });

	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ error, setError ] = useState(null);
	const [ success, setSuccess ] = useState(null);

	useEffect(
		() => {
			console.log('useEffect called');
			console.log('Current user:', user);

			async function fetchProfile() {
				console.log('fetchProfile called');
				if (user && user.username && user.token) {
					const userData = await JoblyApi.getUser(user.username, user.token);
					console.log('Fetched user data:', userData);
					setFirstName(userData.firstName);
					setLastName(userData.lastName);
					setEmail(userData.email);
				}
			}
			fetchProfile();
		},
		[ user ]
	);

	async function handleSubmit(evt) {
		console.log('handleSubmit called');
		evt.preventDefault();
		setError(null);

		const userData = { first_name: firstName, last_name: lastName, email };
		console.log('User data to be updated:', userData);

		try {
			const updatedUser = await JoblyApi.saveProfile(user.username, userData, user.token);
			console.log('Updated user data:', updatedUser);
			console.log(user.username, userData, user.token);
			console.log('Updated user data:', updatedUser);

			setCurrentUser(updatedUser);
			setSuccess('Profile updated successfully!');
		} catch (error) {
			setError('Error occurred while saving user profile: ' + error.message);
			console.log(error.message);
		}
	}

	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Profile</h1>
					</CardTitle>
					{error && <Alert color="danger">{error}</Alert>}
					{success && <Alert color="success">{success}</Alert>}
					<Form onSubmit={handleSubmit}>
						<FormGroup>
							<Label for="firstName">First Name</Label>
							<Input
								type="text"
								name="firstName"
								id="firstName"
								value={firstName}
								onChange={(evt) => setFirstName(evt.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="lastName">Last Name</Label>
							<Input
								type="text"
								name="lastName"
								id="lastName"
								value={lastName}
								onChange={(evt) => setLastName(evt.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="email">Email</Label>
							<Input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={(evt) => setEmail(evt.target.value)}
							/>
						</FormGroup>
						<Button color="primary" type="submit">
							Save Changes
						</Button>
					</Form>
				</CardBody>
			</Card>
		</section>
	);
}

export default Profile;
