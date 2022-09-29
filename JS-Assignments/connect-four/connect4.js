/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a coin is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

let currPlayer = 1; // active player: player 1 plays first

const WIDTH = 7; // x, columns
const HEIGHT = 6; // y, rows

let board = []; // array of rows, each row is an array of cells  (board[y][x])

const reset = document.getElementById("#reset"); // reset button

// this function creates a 2d matrix by creating new arrays using the constructor: Array, and allocates memory for HEIGHT and WIDTH

function makeBoard() {
  console.log("makeBoard()");
  // here we grab the elements of height and width and put it in constructor: Array
  board = new Array(HEIGHT); // create memory to contain size 6
  for (let h = 0; h < HEIGHT; h++) { // loop through the rows
    board[h] = new Array(WIDTH); // create memory to contain size 7
  }
  // nested loops so we can access every single element
  for (let h = 0; h < HEIGHT; h++) { // this loop populates HEIGHT/rows
    for (let w = 0; w < WIDTH; w++) { // this loop populates WIDTH/columns
      board[h][w] = null; // take board and set it to null, it is set to null because it does not currently have any value
    }
  } 
}

// The makeHtmlBoard function dynamically creates the HTML table of rows and columns, with HEIGHT num of rows, WIDTH num of columns. For each iteration in HEIGHT, a new row is generated. For that row, we loop through width to create width num of cells(columns) and append it to the row(td). When the WIDTH loop finishes, the code appends the row with the newly created table data cells to the board.

function makeHtmlBoard() {
  console.log("makeHtmlBoard()");
  // sets board to htmlBoard
  const htmlBoard = document.getElementById("board");

  const top = document.createElement("tr");
  top.setAttribute("id", "column-top"); 
  // when eventListener hears click, we call handleClick on top row of board
  top.addEventListener("click", handleClick); 

  for (let x = 0; x < WIDTH; x++) { // loop through indices of x-axis/columns
    const headCell = document.createElement("td"); 
    headCell.setAttribute("id", x); 
    top.append(headCell);  
  }
  htmlBoard.append(top); // creates and appends top row to board 

  
  for (let y = 0; y < HEIGHT; y++) {  // loops through y-axis of rows
    const row = document.createElement("tr"); 
    for (let x = 0; x < WIDTH; x++) { 
      const cell = document.createElement("td"); 
      cell.setAttribute("id", `${y}-${x}`);  
      row.append(cell);
    }
    htmlBoard.append(row); // appends rows to board
  }
}

/** handleClick: handle click of column top to play coin */

// define handleClick function
function handleClick(evt) {
  // this extracts the id of clicked target and outputs a string. The unary operation converts the string to integers
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place coin in board and add to HTML table
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  } 
  
  // alternate players using ternary operation
  currPlayer = currPlayer === 1 ? 2 : 1; // basically an if else statement
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // coins start at bottom row of board 
  for (let r = HEIGHT -1; r >= 0; r--) { 
    if (board[r][x] === null) {
      return r;
    }
  } // end of loop
  
  return null;
}

/** placeInTable: update DOM to place coin into HTML table of board */
function placeInTable(y, x) {
  // set element at y, x location to current player(blue or red)
  board[y][x] = currPlayer;
  // we created a div and set the class to the index of the coin
  const coin = document.createElement("div");

  coin.setAttribute("class", 'coin p' + `${currPlayer}`);

  // search for the element  
  const space = document.getElementById(`${y}-${x}`);

  // append the coin to the HTML table
  space.append(coin);
}

// check for tie
  // if all cells in board are filled, game is a tie
function tiedGame() {
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      if (board[y][x] === null) {
        return; // if a single null is found, the function exits 
      }
    }
  }
  alert("Game is a Tie!");
}

// this function announces game end
function endGame(msg) {
  alert(msg);
} 


/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    // every() method tests whether all elements in the array pass the tests implemented by the function win(cells)
    return cells.every( 
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }
  // four different ways to win, checks four different views on board
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // checks for match of 4 in x-axis of columns, creates an array inside an array
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]]; 
      // checks for match of 4 in y-axis of rows
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      // checks for a match of 4 in the right diagonal
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      // checks for a match of 4 in the left diagonal
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      // locate the winner (only if there is a win in horiz, or vert, or diagDR, or diagDL)
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

function resetGame() {
  document.querySelector("#reset").addEventListener("click");
  
}

makeBoard();
makeHtmlBoard();
