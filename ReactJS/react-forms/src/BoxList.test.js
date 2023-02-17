import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

// SMOKE TEST
describe('BoxList', () => {
	test('it renders without crashing', () => {
		render(<BoxList />);
	});
});

// SNAPSHOT TEST
test('it matches snapshot', () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});
