/** findRotationCount
 * Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
 * The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
 * Constraints:
 *  -Time Complexity: O(log N)
 * 
*/

function findRotationCount(arr) {
	let start = 0;
	let end = arr.length - 1;

	// initialize start and end to first and last indices of array
	while (start <= end) {
		// if array is not rotated
		if (arr[start] <= arr[end]) {
			return start;
		}

		let mid = Math.floor((start + end) / 2);
		let prev = (mid + arr.length - 1) % arr.length;
		let next = (mid + 1) % arr.length;

		// if pivot element found at mid
		if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
			return mid;
		}

		// search right half of array
		if (arr[mid] >= arr[start]) {
			start = mid + 1;
		}

		// search left half of array
		if (arr[mid] <= arr[end]) {
			end = mid - 1;
		}
	}
}

module.exports = findRotationCount;
