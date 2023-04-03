function merge(left, right) {
	let result = [];
	let i = 0;
	let j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}
	while (i < left.length) {
		result.push(left[i]);
		i++;
	}
	while (j < right.length) {
		result.push(right[j]);
		j++;
	}
	return result;
}

// mergeSort function uses the divide-and-conquer approach to sort an ar
function mergeSort(arr) {
	// if the array has one or fewer elements, it is already sor
	if (arr.length <= 1) {
		return arr;
	}
	// midpoint
	// divide the array into two subarrays
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	let leftSorted = mergeSort(left);
	let rightSorted = mergeSort(right);

	// merge the sorted subarrays using the merge function
	return merge(leftSorted, rightSorted);
}

module.exports = { merge, mergeSort };
