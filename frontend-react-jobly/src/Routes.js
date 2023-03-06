import React from 'react';
import { Route, Routes, Switch, Navigate } from 'react-router-dom';

import Home from './Home';
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

/** Routes file. */

const AppRoutes = () => {
	return (
		<div>
			<Switch>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/companies" element={<CompanyList />} />
					<Route exact path="/companies/:handle" element={<Company />} />
					<Route exact path="/jobs" element={<JobList />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Switch>
		</div>
	);
};

export default AppRoutes;
