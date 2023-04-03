/** findFloor
 * 
 * Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x 
 *  in the array. The floor of x in an array is the largest element in the array which is smaller than 
 *  or equal to x. If the floor does not exist, return -1.
 * 
 */

function findFloor(arr, x) {
	let start = 0;
	let end = arr.length - 1;
	let result = -1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === x) {
			return arr[mid]; // exact match found
		} else if (arr[mid] < x) {
			result = arr[mid]; // current element is a potential candidate for floor
			start = mid + 1; // search the right half
		} else {
			// arr[mid] > x
			end = mid - 1; // search the left half
		}
	}
	return result; // return the floor, or -1 if no floor exists
}

module.exports = findFloor;
