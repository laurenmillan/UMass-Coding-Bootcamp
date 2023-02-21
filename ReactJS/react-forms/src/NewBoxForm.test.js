import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// SMOKE TEST
test('it renders without crashing', () => {
	render(<NewBoxForm />);
});

// SNAPSHOT TEST
test('it matches snapshot', () => {
	const { asFragment } = render(<NewBoxForm />);
	expect(asFragment()).toMatchSnapshot();
});
