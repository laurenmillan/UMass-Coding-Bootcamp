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

/** Jobly App logic.*/

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useState(localStorage.getItem('token'));

	async function signup(username, password, firstName, lastName, email) {
		try {
			const { token, user } = await JoblyApi.signup(username, password, firstName, lastName, email);
			setCurrentUser(user);
			setToken(token);
			localStorage.setItem('token', token);
			return { success: true };
		} catch (error) {
			console.error('Failed to signup:', error);
			return { success: false, error };
		}
	}

	async function login(username, password) {
		try {
			const { token, user } = await JoblyApi.login(username, password);
			setCurrentUser(user);
			setToken(token);
			localStorage.setItem('token', token);
			return { success: true };
		} catch (error) {
			console.error('Failed to login:', error);
			return { success: false, error };
		}
	}

	async function logout() {
		setCurrentUser(null);
		setToken(null);
		localStorage.removeItem('token', token);
	}

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
