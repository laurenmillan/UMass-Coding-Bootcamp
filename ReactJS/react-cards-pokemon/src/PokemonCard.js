import React, { useState } from 'react';
import useFlip from './hooks/useFlip';
import './PokemonCard.css';

/** Renders a single pokemon card.
 * 
 * -Props: front, back, name, stats
 * -The stats prop is an array of key value pairs
 * -The div contains a ternary operator that checks if the card is facing up.
 *    Card up: renders the front - an image, Pokemon name, list of stats.
 *    Card down: renders the back image of card.
 *  
 * */

function PokemonCard({ front, back, name, stats }) {
	const [ isFacingUp, toggleIsFacingUp ] = useFlip();

	return (
		<div onClick={toggleIsFacingUp} className="PokemonCard Card">
			{isFacingUp ? (
				<div className="PokemonCard-front">
					<img src={front} alt={`{name} front`} />
					<div>
						<p className="PokemonCard-name">{name}</p>
						<ul className="PokemonCard-stats">
							{stats.map((stat) => (
								<li key={stat.name}>
									<em>{stat.name}</em>: {stat.value}
								</li>
							))}
						</ul>
					</div>
				</div>
			) : (
				<div className="PokemonCard-back">
					<img src={back} alt={`{name} back`} />
				</div>
			)}
		</div>
	);
}

export default PokemonCard;
