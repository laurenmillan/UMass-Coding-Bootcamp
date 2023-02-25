import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DogInfo from './DogInfo';
import './Dog.css';

/** Displays information about a single dog, which is based on the URL param `name`.
 * 
 * -The useParams hook is used to extract the `name` param from URL.
 * -The filter method is used to find the `name` prop in the DogInfo array of objects.
 * -The map method renders a li element for each fact in the array.
 * The key prop is set to the index of teh fact in the array.
 * 
 */

const Dog = () => {
	const { name } = useParams();
	const dog = DogInfo.dogs.filter((d) => d.name === name);

	// if no matching dog found, return Navigate component which redirects to /dogs page
	if (!dog[0]) {
		return <Navigate to="/dogs" replace />;
	}

	// if a matching dog is found, return the info about the specific dog
	return (
		<div className="Dog">
			<h1>{dog[0].name}</h1>
			<ul className="Dog-info-ul">
				<li>Age: {dog[0].age}</li>
				{dog[0].facts.map((fact) => <li key={dog[0].facts.indexOf(fact)}>{fact}</li>)}
			</ul>
			<img src={dog[0].src} alt={dog[0].name} />
		</div>
	);
};

export default Dog;
