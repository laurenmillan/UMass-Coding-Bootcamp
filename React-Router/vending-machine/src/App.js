import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import VendingMachine from './VendingMachine';
import LifeSavers from './LifeSavers';
import Skittles from './Skittles';
import Starburst from './Starburst';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<VendingMachine />} />
					<Route exact path="/LifeSavers" element={<LifeSavers />} />
					<Route exact path="/Skittles" element={<Skittles />} />
					<Route exact path="/Starburst" element={<Starburst />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
