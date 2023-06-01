/** Connect Four
 *
 * - Player 1 and 2 alternate turns. On each turn, a coin is dropped down a
 *    column until a player gets four-in-a-row (horiz, vert, or diag) or until
 *    board fills (tie)
 */

let currPlayer = 1;

const WIDTH = 7;
const HEIGHT = 6;

let board = [];

/** Creates 2d matrix with HEIGHT and WIDTH columns.
 * 
 * - Each cell initialized to null to represent an empty cell.
 */

function makeBoard() {
	board = new Array(HEIGHT);
	for (let h = 0; h < HEIGHT; h++) {
		board[h] = new Array(WIDTH);
	}
	for (let h = 0; h < HEIGHT; h++) {
		for (let w = 0; w < WIDTH; w++) {
			board[h][w] = null;
		}
	}
}

/** Dynamically create the HTML structure of the game board.
 * 
 * - Includes a clickable row on top of all the cell elements.
 */

function makeHtmlBoard() {
	const htmlBoard = document.getElementById('board');
	const top = document.createElement('tr');
	top.setAttribute('id', 'column-top');
	top.addEventListener('click', handleClick);

	for (let x = 0; x < WIDTH; x++) {
		const headCell = document.createElement('td');
		headCell.setAttribute('id', x);
		top.append(headCell);
	}
	htmlBoard.append(top);

	for (let y = 0; y < HEIGHT; y++) {
		const row = document.createElement('tr');
		for (let x = 0; x < WIDTH; x++) {
			const cell = document.createElement('td');
			cell.setAttribute('id', `${y}-${x}`);
			row.append(cell);
		}
		htmlBoard.append(row);
	}
}

function handleClick(evt) {
	let x = +evt.target.id;
	let y = findSpotForCol(x);

	if (y === null) {
		return;
	}
	placeInTable(y, x);

	if (checkForWin()) {
		endGame(`Player ${currPlayer} won!`);
		return;
	} else if (tiedGame()) {
		alert('Game is a Tie!');
		return;
	}
	currPlayer = currPlayer === 1 ? 2 : 1;
}

/** Searches for the first available empty cell in the column.
 * 
 * - Starts from the bottom.
 */

function findSpotForCol(x) {
	for (let r = HEIGHT - 1; r >= 0; r--) {
		if (board[r][x] === null) {
			return r;
		}
	}
	return null;
}

/** Update DOM to place coin into HTML board. 
 * 
 * - Updates the board array to reflect the current player's move then visually 
 *    places the coin in the corresponding cell on the HTML board.
*/

function placeInTable(y, x) {
	board[y][x] = currPlayer;
	const coin = document.createElement('div');

	coin.setAttribute('class', 'coin p' + `${currPlayer}`);

	const space = document.getElementById(`${y}-${x}`);

	space.append(coin);
}

/** Checks if all cells on the board are filled. */

function tiedGame() {
	for (let y = 0; y < HEIGHT; y++) {
		for (let x = 0; x < WIDTH; x++) {
			if (board[y][x] === null) return false;
		}
	}
	return true;
}

function endGame(msg) {
	alert(msg);
}

/** Checks if every cell in the given set belongs to the current player.
 * 
 * -Checks for a winning condition in every direction (horizontal, vertical, both diagonals)
 */

function checkForWin() {
	function _win(cells) {
		return cells.every(([ y, x ]) => y >= 0 && y < HEIGHT && x >= 0 && x < WIDTH && board[y][x] === currPlayer);
	}
	for (let y = 0; y < HEIGHT; y++) {
		for (let x = 0; x < WIDTH; x++) {
			let horiz = [ [ y, x ], [ y, x + 1 ], [ y, x + 2 ], [ y, x + 3 ] ];
			let vert = [ [ y, x ], [ y + 1, x ], [ y + 2, x ], [ y + 3, x ] ];
			let diagDR = [ [ y, x ], [ y + 1, x + 1 ], [ y + 2, x + 2 ], [ y + 3, x + 3 ] ];
			let diagDL = [ [ y, x ], [ y + 1, x - 1 ], [ y + 2, x - 2 ], [ y + 3, x - 3 ] ];

			if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
				return true;
			}
		}
	}
	return false;
}

/** Reset game. 
 * 
 * - Resets game board to initial state.
 * - Clears the board array and the visual coins on the HTML board. 
*/

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
	currPlayer = 1;

	for (let h = 0; h < HEIGHT; h++) {
		for (let w = 0; w < WIDTH; w++) {
			board[h][w] = null;
		}
	}
	let cells = document.querySelectorAll('#board td');
	cells.forEach((cell) => {
		while (cell.firstChild) {
			cell.removeChild(cell.firstChild);
		}
	});
});

/** Generates random colors for h1. */

function randomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

const letters = document.querySelectorAll('.letter');

setInterval(function() {
	for (let letter of letters) {
		letter.style.color = randomRGB();
	}
}, 500);

makeBoard();
makeHtmlBoard();
