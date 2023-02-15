import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

// SMOKE TEST
test('it renders without crashing', () => {
	render(<Card />);
});

// SNAPSHOT TEST
// this creates a __snapshots__ folder
test('it matches snapshot', () => {
	const { asFragment } = render(<Card caption="test-caption" src="test.jpg" currNum="1" totalNum="3" />);
	expect(asFragment()).toMatchSnapshot();
});
