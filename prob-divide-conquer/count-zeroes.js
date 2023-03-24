/** countZerors
 * 
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, 
 *      which returns the number of zeroes in the array.
 * Constraints:
 *  -Time Complexity: O(log N)
 * 
 */

function countZeroes(arr) {
	let start = 0;
	let end = arr.length - 1;
	let mid;

	// Binary search for the last 1 in the array
	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (arr[mid] === 1) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	// The number of zeroes is the remaining length of the array
	return arr.length - start;
}

module.exports = countZeroes;
