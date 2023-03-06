import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, Switch } from 'react-router-dom';
import JoblyApi from './api';

import Home from './Home';
import CompanyList from './CompanyList';
// import CompanyDetail from './CompanyDetail';
// import JobList from './JobList';
// import Login from './Login';
// import Signup from './Signup';
// import Profile from './Profile';
// import NavBar from './NavBar';

/** App logic.
 * 
 * -state: useState
 * -useEffect: fetches data from API.
 * 
 */

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/companies" element={<CompanyList />} />
				{/* <Route exact path="/companies/:handle" element={<CompanyDetail />} />
				<Route exact path="/jobs" element={<JobList />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route path="*" element={<Navigate to="/home" replace />} /> */}
			</Routes>
		</div>
	);
}

export default App;
