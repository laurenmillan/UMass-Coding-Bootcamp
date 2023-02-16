import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

// SMOKE TEST
test('it renders without crashing', () => {
	render(<Board />);
});

// SNAPSHOT TEST
// Jest creates a __snapshots__ folder
test('it matches snapshot', () => {
	const { asFragment } = render(<Board />);
	expect(asFragment()).toMatchSnapshot();
});
