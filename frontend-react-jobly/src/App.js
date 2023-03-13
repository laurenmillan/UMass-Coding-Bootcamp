import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import JoblyApi from './api/api';

import Home from './Components/Home';
import CompanyList from './companies/CompanyList';
import CompanyDetail from './companies/CompanyDetail';
import JobList from './jobs/JobList';
import Login from './Components/LoginForm';
import Signup from './Components/SignupForm';
import Profile from './Components/Profile';
import NavBar from './Components/NavBar';
import NotFound from './404/404';

/** Jobly App logic.
 *  
 * -initialize `token` with the value of the token key stored in local storage. This maintains the user's
 *    session and avoids the need for the user to login when they revisit the website.
*/

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);
	// here we retrieve the value of the token key from local storage.
	const [ token, setToken ] = useState(localStorage.getItem('token'));

	async function signup(signupData) {
		try {
			const { token, user } = await JoblyApi.signup(signupData);
			setCurrentUser(user);
			setToken(token);
			localStorage.setItem('token', token);
			return { success: true };
		} catch (error) {
			console.error('Failed to signup:', error);
			return { success: false, error };
		}
	}

	/** Here we send a request to API to authenticate user, 
   * and update the app's state with user's info and auth token. */
	async function login(loginData) {
		try {
			const { token, user } = await JoblyApi.login(loginData);
			setCurrentUser(user);
			setToken(token);
			localStorage.setItem('token', token);
			return { success: true };
		} catch (error) {
			console.error('Failed to login:', error);
			return { success: false, error };
		}
	}

	/** Logout by clearing app's state, remove user's auth token from browser's local storage. */
	function logout() {
		setCurrentUser(null);
		setToken(null);
		localStorage.removeItem('token');
	}

	// determine if a user is logged in or not.
	return (
		<div className="App">
			<NavBar user={setCurrentUser} logout={logout} />
			<Routes>
				<Route exact path="/" element={<Home user={currentUser} />} />
				<Route exact path="/companies" element={<CompanyList />} />
				<Route exact path="/companies/:handle" element={<CompanyDetail />} />
				<Route exact path="/jobs" element={<JobList />} />
				<Route exact path="/login" element={<Login login={login} />} />
				<Route exact path="/signup" element={<Signup signup={signup} />} />
				<Route exact path="/profile" element={<Profile user={currentUser} />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
