import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Dogs from './Dogs';
import Dog from './Dog';

const AppRoutes = () => {
	return (
		<Routes>
			<Route exact path="/dogs" element={<Dogs />} />
			<Route exact path="/dogs/:name" element={<Dog />} />
			<Route path="*" element={<Navigate to="/dogs" replace />} />
		</Routes>
	);
};

export default AppRoutes;
