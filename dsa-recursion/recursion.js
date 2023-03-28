/** product: calculate the product of an array of numbers. */

function product(nums) {
	// base case
	if (nums.length === 0) return 1; // returns 1 because when you multiply any num by 1, you get the same num back
	// normal case
	return nums[0] * product(nums.slice(1)); // nums.slice returns a shallow copy of the original array, starting at index 1 up to the end of the array
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
	// base case
	if (words.length === 0) return 0; // if arr is empty, return 0
	// normal case
	const currWordLength = words[0].length; //start at index 0 and store result in currWordLength
	const longestInArr = longest(words.slice(1)); // make recursive call to longest function with rest of words in arr, excluding first word, store res in longestInArr

	return Math.max(currWordLength, longestInArr); // keep track of longest word length
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
	// base case
	if (str.length === 0) return ''; // if str is empty, return empty str
	// normal case
	return str[0] + everyOther(str.slice(2)); // if str is not empty, return first cha of str at index 0, concatenated with the res, passing a substring that starts at index 2
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	// base case
	if (str.length <= 1) return true; // str is a palindrome if it has length of 0 or 1, return true

	// normal case
	// determines if first and last char's are the same
	if (str[0] === str[str.length - 1]) {
		return isPalindrome(str.slice(1, str.length - 1)); // passes a substring created by removing first and last char's of original str
	} else {
		return false; // return false if first and last char's aren't the same
	}
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
	// base case
	if (arr.length === 0) return -1; // return -1 if arr is empty

	// base case: if the first element of the arr is equal to the value, return 0
	if (arr[0] === val) return 0;

	// normal case
	const res = findIndex(arr.slice(1), val);

	if (res === -1) return -1; // if the res is -1, the value is not present in the rest of the arr

	// if the res is not -1, the value is present in the rest of the arr
	// so we add 1 to the res to account for the removed first element
	return res + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
	// base case
	if (str.length <= 1) return str; // return str is it has a length <=1

	// normal case: return the last character of the string
	// followed by the reversed substring without the last character
	return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let result = [];

	for (const key in obj) {
		if (typeof obj[key] === 'string') {
			result.push(obj[key]);
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			result = result.concat(gatherStrings(obj[key]));
		}
	}

	return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
	// base case: when the left pointer is greater than the right pointer, the value is not present
	if (left > right) {
		return -1;
	}

	// calculate the middle index
	const mid = Math.floor((left + right) / 2);

	// if the middle value is equal to the target value, return the middle index
	if (arr[mid] === val) {
		return mid;
	}

	// if the middle value is less than the target value, search in the right half of the array
	if (arr[mid] < val) {
		return binarySearch(arr, val, mid + 1, right);
	}

	// if the middle value is greater than the target value, search in the left half of the array
	return binarySearch(arr, val, left, mid - 1);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
