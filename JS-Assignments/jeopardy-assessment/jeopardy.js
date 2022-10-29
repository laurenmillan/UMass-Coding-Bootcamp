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

let categories = []; // main data structure for game
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;
const game = document.getElementById('game');

/** Get NUM_CATEGORIES random category from API
 */

// returns array of six random category ids
async function getCategoryIds() {
	const response = await axios.get('https://jservice.io/api/categories?count=100');

	// TODO: Bug fix sometimes a category ID does not have at least five clues
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

// returns object with data about a category, then samples five random clues
async function getCategory(catId) {
	const response = await axios.get(`https://jservice.io/api/category?id=${catId}`);

	let category = {
		title: response.data.title,
		clues: []
	};

	// sampled five random clues from clues array from the response data
	const random_clues = _.sampleSize(response.data.clues, NUM_QUESTIONS_PER_CAT);

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
	return category;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

// dynamically creates HTML game board
async function fillTable() {
	const table = document.getElementById('game');
	const top = document.createElement('thead');
	const body = document.createElement('tbody');

	top.setAttribute('id', 'column-top');

	// Head
	for (let x = 0; x < NUM_CATEGORIES; x++) {
		const cell = document.createElement('td');
		cell.setAttribute('id', `cell-${x}`);

		cell.innerHTML = categories[x].title;
		top.append(cell);
	}

	// Body
	for (y = 0; y < NUM_QUESTIONS_PER_CAT; y++) {
		const row = document.createElement('tr');
		row.addEventListener('click', handleClick);
		body.append(row);

		for (let x = 0; x < NUM_CATEGORIES; x++) {
			const col = document.createElement('td');
			// Add the question number as `id`
			col.setAttribute('id', `${y}`);
			col.innerHTML = '?';
			row.append(col);
		}
	}

	table.append(top);
	table.append(body);
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
	const cat_id = evt.target.cellIndex;
	const ques_id = +evt.target.id;
	const clue = categories[cat_id].clues[ques_id];

	if (clue.showing === null) {
		evt.target.innerHTML = clue.question;
		clue.showing = 'question';
	} else {
		evt.target.innerHTML = clue.answer;
		clue.showing = 'answer';
	}

	// const textDisplay = document.createElement('div');
	// textDisplay.innerHTML = this.getAttribute('question');
	// this.append(textDisplay);
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
	// get random category Ids
	const random_category_ids = await getCategoryIds();
	for (let id of random_category_ids) {
		// get category for each id
		const category = await getCategory(id);
		// push category onto main data structure categories
		categories.push(category);
	}
	// console.log(categories);

	fillTable();
}

/** On click of start / restart button, set up game. */
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
	const table = document.getElementById('game');
	while (table.firstChild) table.removeChild(table.firstChild);
	setupAndStart();
});

setupAndStart();
