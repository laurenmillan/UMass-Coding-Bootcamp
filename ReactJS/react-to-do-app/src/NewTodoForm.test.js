import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// SMOKE TEST
test('it renders without crashing', () => {
	render(<NewTodoForm />);
});

// SNAPSHOT TEST
test('it matches snapshot', () => {
	const { asFragment } = render(<NewTodoForm />);
	expect(asFragment()).toMatchSnapshot();
});
