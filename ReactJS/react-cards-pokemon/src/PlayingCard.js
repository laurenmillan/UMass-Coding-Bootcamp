import React, { useState } from 'react';
import useFlip from './hooks/useFlip';
import backOfCard from './back.png';
import './PlayingCard.css';

/** Renders a single playing card.
 * 
 * -Props: front, back
 * -the back prop = backOfCard, defaults to the png image
 * 
 * */

function PlayingCard({ front, back = backOfCard }) {
	const [ isFacingUp, toggleIsFacingUp ] = useFlip();
	return (
		<img
			src={isFacingUp ? front : back}
			alt="playing card"
			onClick={toggleIsFacingUp}
			className="PlayingCard Card"
		/>
	);
}

export default PlayingCard;
