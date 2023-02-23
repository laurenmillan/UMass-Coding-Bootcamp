import React, { useState } from 'react';
import NewMadlibForm from './NewMadlibForm';
import Madlib from './Madlib';

/** Madlib Maker.
 *
 * State: madlibs, setMadlibs
 * Props: addMadlib, noun, noun2, adjective, color
 *
 * - contains all of the Madlib words
 * - should render all of the Madlib components along
 *      with the NewMadlibForm component
 *
 **/

// initial value of madlibs is an empty array so it can be updated
const MadlibList = () => {
	const [ madlibs, setMadlibs ] = useState([]);

	// this function takes formData as an argument, it creates a new array to copy existing madlibs array
	const addMadlib = (formData) => {
		// setMadlibs is called with the new array to update State
		setMadlibs((madlibs) => [ ...madlibs, formData ]);
	};

	// form to create new madlib using the NewMadlibForm component and addMadlib as its prop
	// map iterates over the madlibs array and renders a Madlib component for each element in the array
	//  and is giving noun, noun2, adjective, color as props, with a key using the array index
	return (
		<div className="MadlibList">
			<NewMadlibForm addMadlib={addMadlib} />
			{madlibs.map((madlib, i) => (
				<Madlib
					key={i}
					noun={madlib.noun}
					noun2={madlib.noun2}
					adjective={madlib.adjective}
					color={madlib.color}
				/>
			))}
		</div>
	);
};

export default MadlibList;
