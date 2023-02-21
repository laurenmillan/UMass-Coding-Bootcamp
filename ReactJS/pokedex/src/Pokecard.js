import React from 'react';
import './Pokecard.css';

const images = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
	let imgSrc = `${images}${props.id}.png`;

	return (
		<div className="Pokecard">
			<div className="Pokecard-name">{props.name} </div>
			<img className="Pokecard-img" src={imgSrc} />
			<div className="Pokecard-type">Type: {props.type}</div>
			<div className="Pokecard-exp">EXP: {props.experience}</div>
		</div>
	);
};

export default Pokecard;
