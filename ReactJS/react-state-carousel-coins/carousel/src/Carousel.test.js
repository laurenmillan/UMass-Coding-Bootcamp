import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import TEST_IMAGES from './_testCommon.js';

// SMOKE TEST
test('it renders without crashing', () => {
	render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
});

// SNAPSHOT TEST
// Jest creates a __snapshots__ folder
test('it matches snapshot', () => {
	const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
	expect(asFragment()).toMatchSnapshot();
});

// test left arrow click
it('works when you click on the left arrow', function() {
	const { container, debug } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
	debug();
	const rightArrow = container.querySelector('.bi-arrow-right-circle');
	fireEvent.click(rightArrow);

	const leftArrow = container.querySelector('.bi-arrow-left-circle');
	fireEvent.click(leftArrow);

	// expect the first image to show, but not the second
	expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
	expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();
});

// test right arrow click
it('works when you click on the right arrow', function() {
	const { container } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);

	// expect the first image to show, but not the second
	expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
	expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = container.querySelector('.bi-arrow-right-circle');
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(container.querySelector('img[alt="testing image 1"]')).not.toBeInTheDocument();
	expect(container.querySelector('img[alt="testing image 2"]')).toBeInTheDocument();
});

// hide left arrow on image 1
test('should hide left arrow', function() {
	const { container } = render(<Carousel photos={TEST_IMAGES} title="testing" />);
	const leftArrow = container.querySelector('.bi-arrow-left-circle');

	expect(leftArrow).toBe(null);
	expect(leftArrow).not.toBeInTheDocument;
});

// hide right arrow on image 3
test('should hide right arrow', function() {
	const { container } = render(<Carousel photos={TEST_IMAGES} title="testing" />);
	const rightArrow = container.querySelector('.bi-arrow-right-circle');
	fireEvent.click(rightArrow);

	expect(rightArrow).not.toBeInTheDocument;
});
