import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useApi from './hooks/useApi';
import PokemonSelect from './PokemonSelect';
import PokemonCard from './PokemonCard';
import './PokeDex.css';

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
	const [ pokemonData, addPokemonData ] = useApi('https://pokeapi.co/api/v2/');

	const addPokemon = async (name) => {
		await addPokemonData(`pokemon/${name}/`);
	};

	return (
		<div className="PokeDex">
			<div className="PokeDex-buttons">
				<h3>Please select your pokemon:</h3>
				<PokemonSelect add={addPokemon} />
			</div>
			<div className="PokeDex-card-area">
				{pokemonData.map((cardData) => (
					<PokemonCard
						key={cardData.id || uuid()}
						front={cardData.sprites.front_default}
						back={cardData.sprites.back_default}
						name={cardData.name}
						stats={cardData.stats.map((stat) => ({
							value: stat.base_stat,
							name: stat.stat.name
						}))}
					/>
				))}
			</div>
		</div>
	);
}

export default PokeDex;
