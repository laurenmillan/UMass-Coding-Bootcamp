import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import NavComp from './NavComp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<NavComp />
			<AppRoutes />
		</div>
	);
}

export default App;
