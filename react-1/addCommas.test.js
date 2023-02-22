const addCommas = require('./addCommas');

describe('#addCommas', () => {
	test('it is a function', () => {
		expect(typeof addCommas).toBe('function');
	});
});

test('adds commas to a positive integer', () => {
	expect(addCommas(1234)).toBe('1,234');
});

test('adds commas to a large positive integer', () => {
	expect(addCommas(1000000)).toBe('1,000,000');
});

test('adds commas to a very large positive integer', () => {
	expect(addCommas(9876543210)).toBe('9,876,543,210');
});

test('does not add commas to a single-digit integer', () => {
	expect(addCommas(6)).toBe('6');
});

test('adds a negative sign to a negative integer', () => {
	expect(addCommas(-10)).toBe('-10');
});

test('adds commas to a negative integer', () => {
	expect(addCommas(-5678)).toBe('-5,678');
});

test('adds commas to a positive decimal number', () => {
	expect(addCommas(12345.678)).toBe('12,345.678');
});

test('adds commas to a negative decimal number', () => {
	expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
});
