//** Exercise I: make a request to the Deck of Cards API to request a single card from a newly shuffled deck: */

// async function getCard() {
// 	const url = 'http://deckofcardsapi.com/';
// 	let p1 = $.getJSON(`${url}/api/deck/new/shuffle`);
// 	let res = await p1;
// 	let p2 = await $.getJSON(`${url}/api/deck/${res.deck_id}/draw`);
// 	console.log(`${p2.cards[0].value} of ${p2.cards[0].suit}`);
// }
// getCard();

//** Exercise II: Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request
//  to the same API to get one more card from the same deck: */

// const deck = {
// 	async init() {
// 		let response = await axios.get('https://deckofcardsapi.com//api/deck/new/');
// 		this.deckId = response.data.deck_id;
// 	},
// 	async shuffle() {
// 		let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle`);
// 		console.log(response);
// 	},
// 	async drawCard() {
// 		let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
// 		console.log(response.data);
// 	}
// };

//** Exercise III: Build an HTML page that lets you draw cards from a deck.
//  When the page loads, go to the Deck of Cards API to create a new deck, and show a button
//  on the page that will let you draw a card. Every time you click the button,
//  display a new card, until there are no cards left in the deck. */

const deck = {
	async init() {
		let response = await axios.get('https://deckofcardsapi.com//api/deck/new/');
		this.deckId = response.data.deck_id;
	},
	async shuffle() {
		let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle`);
		console.log(response);
	},
	catch(err) {
		console.log('Page not found', err);
	},
	async drawCard() {
		let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
		console.log(response.data);
	},
	catch(err) {
		console.log('Page not found', err);
	}
};
