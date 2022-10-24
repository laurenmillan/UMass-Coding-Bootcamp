// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
	const response = await axios.get('https://jservice.io/api/categories?count=100');

	// creates new array of category ids
	const category_ids = response.data.map((category) => category.id);

	// returns array of random category ids using Lodash sampleSize method
	return _.sampleSize(category_ids, NUM_CATEGORIES);
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
	const response = await axios.get(`https://jservice.io/api/category?id=${catId}`);

	let category = {
		title: response.data.title,
		clues: []
	};

	// sampled five random clues from clues array from the response data
	const random_clues = _.sampleSize(response.data.clues, NUM_QUESTIONS_PER_CAT);
	// console.log(random_clues);

	// loop through random_clues array, created new object in desired format
	for (let clue of random_clues) {
		// reformat random clue
		const result = {
			question: clue.question,
			answer: clue.answer,
			showing: null
		};
		// push result onto category clues
		category.clues.push(result);
	}

	// console.log(response.data);
	// console.log(category);

	return category;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable(categories, thead) {
	let topRow = document.createElement('tr');
	for (let category of categories) {
		const tdata = document.createElement('td');
		tdata.innerText = category.title;
		topRow.append(tdata);
	}
	thead.append(topRow);

	// let html_board = document.getElementById('game');
	// let thead = document.createElement('thead');

	// for (let row = 0; row < NUM_CATEGORIES; row++) {
	// 	let trow = document.createElement('tr');
	// 	let tdata = document.createElement('td');

	// 	trow.append(tdata);
	// 	thead.append(trow);
	// }

	// html_board.append(thead);

	// let tbody = document.createElement('tbody');
	// for (let row = 0; row < NUM_CATEGORIES; row++) {
	// 	for (let col = 0; col < NUM_QUESTIONS_PER_CAT; col++) {
	// 		let tdata = document.createElement('td');
	// 		let text = document.createTextNode('?');

	// 		tdata.append(text);
	// 		tbody.append(tdata);
	// 	}
	// }

	// html_board.append(tbody);
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

// async function setupAndStart() {
// 	fillTable();
// }

/** On click of start / restart button, set up game. */

// TODO
// setupAndStart();

/** On page load, add event handler for clicking clues */
