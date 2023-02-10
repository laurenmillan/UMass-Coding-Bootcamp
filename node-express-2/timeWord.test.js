const timeWord = require('./timeWord');

describe('#timeWord', () => {
	test('it is a function', () => {
		expect(typeof timeWord).toBe('function');
	});

	test('returns correct words for 02:15', () => {
		expect(timeWord('02:15')).toBe('two quarter past');
	});

	test('returns correct words for 07:25', () => {
		expect(timeWord('07:25')).toBe('seven twenty five past');
	});

	test('returns correct words for 08:00', () => {
		expect(timeWord('08:00')).toBe("eight o' clock");
	});

	test('returns correct words for 12:00', () => {
		expect(timeWord('12:00')).toBe("twelve o' clock");
	});

	test('returns correct words for 09:20', () => {
		expect(timeWord('9:20')).toBe('nine twenty past');
	});
});
