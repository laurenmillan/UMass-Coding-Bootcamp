import React, { useState } from 'react';

/** Logic for flipping a card.
 * 
 * -Write a custom hook called useFlip which will hold the business logic for flipping any type of card.
 * -useFlip doesn’t need to take an argument, and similar to useState, it should return an array with two elements. 
 * -The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.
 * -Once you’ve written this hook, refactor PokemonCard and PlayingCard to use this custom hook.
 *
 * -useState is set to true for the front of the card to initially be visible
 * 
 */

function useFlip() {
	const [ state, setState ] = useState(true);
	const toggleState = () => {
		setState((state) => !state);
	};
	return [ state, toggleState ];
}

export default useFlip;
