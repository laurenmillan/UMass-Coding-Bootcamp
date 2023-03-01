const unroll = require('./unroll');

describe('#unroll', () => {
	test('is a function', function() {
		expect(typeof unroll).toEqual('function');
	});

	test('returns an empty array for an empty input', () => {
		expect(unroll([])).toEqual([]);
	});

	test('returns an array with one element for a one-element input', () => {
		expect(unroll([ [ 1 ] ])).toEqual([ 1 ]);
	});

	test('returns the correct result for a 2x2 input', () => {
		const squareArray = [ [ 1, 2 ], [ 3, 4 ] ];
		expect(unroll(squareArray)).toEqual([ 1, 2, 4, 3 ]);
	});

	test('returns the correct result for a 3x3 input', () => {
		const squareArray = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
		expect(unroll(squareArray)).toEqual([ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]);
	});

	test('returns the correct result for a 4x4 input', () => {
		const squareArray = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ];
		expect(unroll(squareArray)).toEqual([ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]);
	});
});
