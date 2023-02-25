import React from 'react';
import { Link } from 'react-router-dom';
import DogInfo from './DogInfo';

const Dogs = () => {
	return (
		<div>
			<ul className="Dog-List">
				{DogInfo.dogs.map((dog) => (
					<li>
						<Link to={`/dogs/${dog.name}`} key={dog.name}>
							<img src={dog.src} alt={dog.name} />
						</Link>
					</li>
				))}
				{DogInfo.dogs.map((dog) => (
					<li>
						<Link to={`/dogs/${dog.name}`} key={dog.name}>
							<img src={dog.src} alt={dog.name} />
						</Link>
					</li>
				))}
				{DogInfo.dogs.map((dog) => (
					<li>
						<Link to={`/dogs/${dog.name}`} key={dog.name}>
							<img src={dog.src} alt={dog.name} />
						</Link>
					</li>
				))}
				{DogInfo.dogs.map((dog) => (
					<li>
						<Link to={`/dogs/${dog.name}`} key={dog.name}>
							<img src={dog.src} alt={dog.name} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dogs;
