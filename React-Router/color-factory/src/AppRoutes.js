import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';

import ColorFactory from './ColorFactory';
import ColorPage from './ColorPage';
import ColorForm from './ColorForm';

/** Define our routes.
 * 
 * -useState initializes the `colors` state variable.
 * -useEffect updates the local storage when `colors` changes.
 * -useEffect defines `addColor` function that updates `colors` when a new color is added.
 * 
 */

const AppRoutes = () => {
	// useState is initialized to an empty object, because the `colors` state is an object with color name-value pairs
	const [ colors, setColors ] = useState(JSON.parse(localStorage.getItem('colors')) || {});

	useEffect(
		() => {
			localStorage.setItem('colors', JSON.stringify(colors));
		},
		[ colors ]
	);

	const addColor = (color, value) => {
		setColors((colors) => {
			const colorCopy = { ...colors };
			colorCopy[color] = value;
			return colorCopy;
		});
	};

	return (
		<div className="Routes">
			<Routes>
				<Route exact path="/colors" element={<ColorFactory colors={colors} />} />
				<Route exact path="/colors/:color" element={<ColorPage colors={colors} />} />
				<Route exact path="/colors/new" element={<ColorForm addColor={addColor} />} />
				{/* catch-all route: matches any path that does not match the previous two routes. Redirects the user back to /dogs using Navigate */}
				<Route path="*" element={<Navigate to="/colors" replace />} />
			</Routes>
		</div>
	);
};

export default AppRoutes;
