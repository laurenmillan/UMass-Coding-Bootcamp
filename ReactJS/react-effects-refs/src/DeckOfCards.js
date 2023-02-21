import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './DeckOfCards.css';

/** Deck of Cards app.
 * 
 * Component: DeckOfCards
 * State: deckId, cards, remaining, isLoading
 * 
 * useRef: use this hook to create a reference to the draw card button element
 * 
 * deckId: the ID of the deck we create using the Deck of Cards API.
 * cards: an array of cards drawn from the deck.
 * remaining: the number of cards remaining in the deck.
 * isLoading: set to false to disable the buttons during API calls to avoid issues with multiple API calls in progress
 *  
 */

function DeckOfCards() {
	const [ deckId, setDeckId ] = useState(null);
	const [ cards, setCards ] = useState([]);
	const [ remaining, setRemaining ] = useState(0);
	const [ isLoading, setIsLoading ] = useState(false);
	const drawBtnRef = useRef(null);

	// here we define an effect using useEffect hook
	useEffect(() => {
		const createDeck = async () => {
			try {
				const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

				// set the setDeckId and setRemaining state variables on the response data from teh API
				setDeckId(response.data.deck_id);
				setRemaining(response.data.remaining);
			} catch (error) {
				console.log(error);
			}
		};
		// the createDeck function is called once to fetch a new shuffled deck from the API
		createDeck();
		// the empty array is a second argument of useEffect, and the effect should be executed once when the component is initialized.
		// this ensures the effect doesn't re-run if any of the component's state or props change, which can prevent unnecessary re-renders.
	}, []);

	// the drawCard function sends a request to the API to draw a card, updates cards and remaining state variables with the response data
	// setIsLoading is set to true at the beginning to indicate the API call is about to be made, the buttons are disabled and loading indicators are shown to user
	const drawCard = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
			if (response.data.cards.length === 0) {
				alert('Error: no cards remaining!');
			} else {
				setCards([ ...cards, response.data.cards[0] ]);
				setRemaining(response.data.remaining);
			}
		} catch (error) {
			console.log(error);
		}
		// setIsLoading is set to false to indicate the call has completed, the buttons can be re-enabled and loading indicators are hidden
		setIsLoading(false);
	};

	const shuffleDeck = async () => {
		setIsLoading(true);
		// the setCards([]) call is used to clear the cards state
		setCards([]);
		try {
			const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
			setRemaining(response.data.remaining);
		} catch (error) {
			console.log(error);
		}
		// setIsLoading is set to false to indicate the call has completed, the buttons can be re-enabled and loading indicators are hidden
		setIsLoading(false);
	};

	return (
		<div className="DeckOfCards">
			<div className="card-container">
				{cards.map((card, index) => <img key={index} src={card.image} alt={card.code} />)}
			</div>
			<div>
				<button
					className="draw-button"
					ref={drawBtnRef}
					onClick={drawCard}
					disabled={remaining === 0 || isLoading}
				>
					Draw Card
				</button>
				<button className="shuffle-button" onClick={shuffleDeck} disabled={isLoading}>
					Shuffle Deck
				</button>
			</div>
		</div>
	);
}

export default DeckOfCards;
