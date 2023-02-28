import React from 'react';
import AppRoutes from './AppRoutes';
import NavComp from './NavComp';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div>
			<NavComp />
			<AppRoutes />
		</div>
	);
};

export default App;
