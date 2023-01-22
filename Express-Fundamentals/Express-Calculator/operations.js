// const data = [ 9, 92, 6, 13, 7, 9 ];

//** mean */
const mean = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
};
// console.log(`${data}`);
// console.log(`${mean(data)}`);

//** median */
const median = (arr) => {
	const { length } = arr.sort((a, b) => a - b);
	if (length % 2 === 0) {
		return (arr[length / 2 - 1] + arr[length / 2]) / 2;
	}
	return arr[(length - 1) / 2];
};
// console.log(`${data}`);
// console.log(`${median(data)}`);

//** mode */
const mode = (arr) => {
	const mode = {};
	let max = 0,
		count = 0;

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];

		if (mode[item]) {
			mode[item]++;
		} else {
			mode[item] = 1;
		}

		if (count < mode[item]) {
			max = item;
			count = mode[item];
		}
	}
	return max;
};

// console.log(`${data}`);
// console.log(`${mode(data)}`);

module.exports = { mean, median, mode };
