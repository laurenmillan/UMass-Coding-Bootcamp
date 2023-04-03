function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		// exclude last i element of arr because it is already sorted,
		// subtract i to exclude last i element and subtract one to compare each element with the next one
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

module.exports = bubbleSort;
