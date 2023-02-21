import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

// SMOKE TEST
test('it renders without crashing', () => {
	render(<TodoList />);
});

// SNAPSHOT TEST
test('it matches snapshot', () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});
