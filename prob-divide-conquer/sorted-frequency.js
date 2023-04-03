/** sortedFrequency
 * 
 * Given a sorted array and a number, write a function called sortedFrequency that counts the 
 *  occurrences of the number in the array.
 * Constraints:
 *  -Time Complexity: O(log N) 
 * 
 */

function sortedFrequency(arr, num) {
	let firstIndex = findFirstIndex(arr, num);
	if (firstIndex === -1) {
		return -1; // number not found in the array
	}
	let lastIndex = findLastIndex(arr, num);
	return lastIndex - firstIndex + 1;
}

function findFirstIndex(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	let result = -1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === num) {
			result = mid; // store the index and continue searching left
			end = mid - 1;
		} else if (arr[mid] < num) {
			start = mid + 1; // search the right half
		} else {
			// arr[mid] > num
			end = mid - 1; // search the left half
		}
	}
	return result;
}

function findLastIndex(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	let result = -1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === num) {
			result = mid; // store the index and continue searching right
			start = mid + 1;
		} else if (arr[mid] < num) {
			start = mid + 1; // search the right half
		} else {
			// arr[mid] > num
			end = mid - 1; // search the left half
		}
	}
	return result;
}

module.exports = sortedFrequency;
