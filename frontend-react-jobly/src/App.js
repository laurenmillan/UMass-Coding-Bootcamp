import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import JoblyApi from './api/api';

import Home from './Components/Home';
import CompanyList from './companies/CompanyList';
import CompanyDetail from './companies/CompanyDetail';
import JobList from './jobs/JobList';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import NavBar from './Components/NavBar';
import NotFound from './404/404';

/** App logic.*/

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/companies" element={<CompanyList />} />
				<Route exact path="/companies/:handle" element={<CompanyDetail />} />
				<Route exact path="/jobs" element={<JobList />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
