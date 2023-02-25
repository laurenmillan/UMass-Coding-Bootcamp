import React from 'react';
import { Link } from 'react-router-dom';
import DogInfo from './DogInfo';

/** Renders a list of dogs with their images as links to their individual pages.
 * 
 * -In the component's render method, it maps through the DogInfo.dogs array using the map() function to create an unordered list of dogs.
 * -For each dog, it creates a `li` and a `Link` using the top prop to set the URL path to the individual dog's page.
 * -The image of the dog is displayed using the `src` and `alt` attributes.
 * -The key prop is used to provide a unique identifier for each list item by its index.
 * 
 */

const Dogs = () => {
	return (
		<div>
			<ul>
				{DogInfo.dogs.map((dog, index) => (
					<li key={index}>
						<Link to={`/dogs/${dog.name}`}>
							<img src={dog.src} alt={dog.name} />
						</Link>
					</li>
				))}
				{DogInfo.dogs.map((dog, index) => (
					<li key={index}>
						<Link to={`/dogs/${dog.name}`}>
							<img src={dog.src} alt={dog.name} />
						</Link>
					</li>
				))}
				{DogInfo.dogs.map((dog, index) => (
					<li key={index}>
						<Link to={`/dogs/${dog.name}`}>
							<img src={dog.src} alt={dog.name} />
						</Link>
					</li>
				))}
				{DogInfo.dogs.map((dog, index) => (
					<li key={index}>
						<Link to={`/dogs/${dog.name}`}>
							<img src={dog.src} alt={dog.name} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dogs;
