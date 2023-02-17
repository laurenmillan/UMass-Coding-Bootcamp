import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

// SMOKE TEST
describe('Box', () => {
	test('it renders without crashing', () => {
		render(<Box />);
	});
});

// SNAPSHOT TEST
test('it matches snapshot', () => {
	const { asFragment } = render(<Box />);
	expect(asFragment()).toMatchSnapshot();
});
