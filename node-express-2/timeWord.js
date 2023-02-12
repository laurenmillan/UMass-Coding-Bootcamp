function timeWord(timeString) {
	let words = '';
	let time = timeString.split(':');
	let hours = parseInt(time[0]);
	let minutes = parseInt(time[1]);

	let hoursWords = [
		'twelve',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'one',
		'two'
	];

	let minutesWords = [
		"o' clock",
		'five past',
		'ten past',
		'quarter past',
		'twenty past',
		'twenty five past',
		'half past',
		'twenty five to',
		'twenty to',
		'quarter to',
		'ten to',
		'five to',
		"o' clock"
	];

	words = hoursWords[hours % 12] + ' ' + minutesWords[minutes / 5];

	return words;
}

module.exports = timeWord;
