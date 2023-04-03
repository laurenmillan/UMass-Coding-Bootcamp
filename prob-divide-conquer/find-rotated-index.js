/**findRotatedIndex
 * 
 * Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
 * The function should return the index of num in the array. If the value is not found, return -1.
 * Constraints:
 *  -Time Complexity: O(log N)
 */

function findRotatedIndex(arr, num) {
	let pivotIndex = findPivotIndex(arr);
	if (pivotIndex === 0 || num < arr[0]) {
		// search right half of array
		return binarySearch(arr, num, pivotIndex, arr.length - 1);
	} else {
		// search left half of array
		return binarySearch(arr, num, 0, pivotIndex - 1);
	}
}

function findPivotIndex(arr) {
	let start = 0;
	let end = arr.length - 1;

	if (arr[start] < arr[end]) {
		// array is not rotated
		return 0;
	}

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] > arr[mid + 1]) {
			return mid + 1; // pivot found at mid+1
		} else if (arr[mid] >= arr[start]) {
			start = mid + 1; // search the right half
		} else {
			end = mid - 1; // search the left half
		}
	}
}

function binarySearch(arr, num, start, end) {
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === num) {
			return mid; // found the number
		} else if (arr[mid] < num) {
			start = mid + 1; // search the right half
		} else {
			end = mid - 1; // search the left half
		}
	}
	return -1; // number not found in the array
}

module.exports = findRotatedIndex;
