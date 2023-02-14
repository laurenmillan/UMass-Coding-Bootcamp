import './App.css';
import React from 'react';
import Pokedex from './Pokedex';
import Alert from './Alert';

function App() {
	return (
		<div className="App">
			<Alert variant="success">
				<h1>Welcome Back!</h1>
			</Alert>
			<Pokedex />
		</div>
	);
}

export default App;
