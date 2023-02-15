import { useState } from 'react';
import './Carousel.css';
import Card from './Card';

/** Carousel: displays images and arrows to navigate through them
 * 
 * The component Carousel takes two Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * The component uses the useState hook:
 * - currCardIdx: integer for current card index
 * - setCurrCardIdx: is a function that updates currCardIdx
 * 
 * - currCardIdx: initially set to 0, meaning the first photo in the 'photos' array will be displayed when the component is first rendered.
 * 
 * App --> Carousel --> Card
 */

function Carousel({ photos, title }) {
	const [ currCardIdx, setCurrCardIdx ] = useState(0);

	// currCard is set to the current photo being displayed, which is determined by accessing the photos array at the index of currCardIdx.
	// total is set to the total number of photos in the photos array, which is simply the length of the array.

	const currCard = photos[currCardIdx];
	const total = photos.length;

	// Increments currCardIdx state by 1
	function goForward() {
		setCurrCardIdx(currCardIdx + 1);
	}

	// Decrements currCardIdx state by 1
	// function goBackward() {
	// 	setCurrCardIdx(currCardIdx - 1);
	// }

	return (
		<div className="Carousel">
			<h1>{title}</h1>
			<div className="Carousel-main">
				<i className="bi bi-arrow-left-circle" onClick={goForward} />
				<Card caption={currCard.caption} src={currCard.src} currNum={currCardIdx + 1} totalNum={total} />
				<i className="bi bi-arrow-right-circle" onClick={goForward} />
			</div>
		</div>
	);
}

export default Carousel;
