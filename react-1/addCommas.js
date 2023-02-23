function addCommas(num) {
	// Convert num to string, then store result in numStr
	let numStr = num.toString();

	// Check if num is negative by checking the first character of numStr, if num is negative, store it in isNegative, set to true
	let isNegative = numStr.charAt(0) === '-';

	// Split the string into int and decimal parts and store int in intPart and the decimal in decimalPart variables
	let parts = numStr.split('.');
	let intPart = isNegative ? parts[0].slice(1) : parts[0];
	let decimalPart = parts[1] || '';

	// Insert commas into the int part
	// On the third iteration, when i is 5 and j is 3, a comma will be insterted before the current character, resulting in intWithCommas
	let intWithCommas = '';
	for (let i = intPart.length - 1, j = 1; i >= 0; i--, j++) {
		if (j % 3 === 0 && i !== 0) {
			intWithCommas = ',' + intPart.charAt(i) + intWithCommas;
		} else {
			intWithCommas = intPart.charAt(i) + intWithCommas;
		}
	}

	// Concatenate the int and decimal parts with a decimal point
	let result = isNegative ? '-' + intWithCommas : intWithCommas;
	if (decimalPart !== '') {
		result += '.' + decimalPart;
	}

	return result;
}

module.exports = addCommas;
