import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');

	useEffect(
		() => {
			async function fetchProfile() {
				if (user) {
					const userData = await JoblyApi.getUser(user.username, user.token);
					setFirstName(userData.first_name);
					setLastName(userData.last_name);
					setEmail(userData.email);
				}
			}
			fetchProfile();
		},
		[ user ]
	);

	async function handleSubmit(evt) {
		evt.preventDefault();

		if (!user) {
			return;
		}

		const userData = { first_name: firstName, last_name: lastName, email };
		console.log('userData:', userData);

		try {
			const updatedUser = await JoblyApi.saveProfile(user.username, userData, user.token);
			setCurrentUser(updatedUser);
		} catch (error) {
			console.error('Error occurred while saving user profile:', error);
		}
	}

	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Profile</h1>
					</CardTitle>
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
