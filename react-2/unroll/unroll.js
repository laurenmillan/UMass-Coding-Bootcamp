function unroll(squareArray) {
	const result = [];

	let rowStart = 0,
		// set to last index of array
		rowEnd = squareArray.length - 1;
	let colStart = 0,
		colEnd = squareArray[0].length - 1;

	while (rowStart <= rowEnd && colStart <= colEnd) {
		// right
		for (let i = colStart; i <= colEnd; i++) {
			result.push(squareArray[rowStart][i]);
		}
		rowStart++;

		// down
		for (let i = rowStart; i <= rowEnd; i++) {
			result.push(squareArray[i][colEnd]);
		}
		colEnd--;

		// left
		if (rowStart <= rowEnd) {
			for (let i = colEnd; i >= colStart; i--) {
				result.push(squareArray[rowEnd][i]);
			}
			rowEnd--;
		}

		// up
		if (colStart <= colEnd) {
			for (let i = rowEnd; i >= rowStart; i--) {
				result.push(squareArray[i][colStart]);
			}
			colStart++;
		}
	}

	return result;
}

module.exports = unroll;
