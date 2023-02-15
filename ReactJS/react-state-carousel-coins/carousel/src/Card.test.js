import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

// SMOKE TEST
test('it renders without crashing', () => {
	render(<Card />);
});
