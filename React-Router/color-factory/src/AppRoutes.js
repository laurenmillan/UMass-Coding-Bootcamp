import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';

const AppRoutes = () => {
	const [ colors, setColors ] = useState([]);

	useEffect(() => {
		const storedColors = JSON.parse(localStorage.getItem('colors'));
		if (storedColors) {
			setColors(storedColors);
		}
	}, []);

	useEffect(
		() => {
			localStorage.setItem('colors', JSON.stringify(colors));
		},
		[ colors ]
	);

	const handleAddColor = (color) => {
		setColors([ color, ...colors ]);
	};

	return (
		<div className="Routes">
			<Routes>
				<Route exact path="/colors" element={<ColorList colors={colors} />} />
				<Route exact path="/colors/:color" element={<ColorDetail colors={colors} />} />
				<Route exact path="/colors/new" element={<ColorForm colors={colors} addColor={handleAddColor} />} />
				<Route path="*" element={<Navigate to="/colors" replace />} />
			</Routes>
		</div>
	);
};

export default AppRoutes;
