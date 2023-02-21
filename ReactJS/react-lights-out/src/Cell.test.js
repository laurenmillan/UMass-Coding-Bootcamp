import React from 'react';
import { render } from '@testing-library/react';
import Cell from './Cell';

// SMOKE TEST
test('it renders without crashing', () => {
	render(<Cell />);
});

// SNAPSHOT TEST
// Jest creates a __snapshots__ folder
test('it matches snapshot', () => {
	const { asFragment } = render(<Cell />);
	expect(asFragment()).toMatchSnapshot();
});
