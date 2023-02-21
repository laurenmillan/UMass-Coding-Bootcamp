import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

// SMOKE TEST
describe('Board', () => {
	test('it renders without crashing', () => {
		render(<Board />);
	});
});

// SNAPSHOT TEST
test('it matches snapshot', () => {
	const { asFragment } = render(<Board />);
	expect(asFragment()).toMatchSnapshot();
});
