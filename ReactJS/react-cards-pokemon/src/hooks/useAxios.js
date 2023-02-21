import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

/** Logic for Axios API calls.
 * 
 * Since we use axios in a few components, let’s move this logic into a function called useAxios.
 * -useAxios should take in a URL, and similar to useState, it should return an array with two elements. 
 * -The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). 
 * -The second element is a function that will add a new object of data to our array.
 * 
 */

function useAxios(url) {
	const [ data, setData ] = useState([]);

	const addData = async () => {
		const response = await axios.get(url);
		setData((prevData) => [ ...prevData, { ...response.data, id: uuid() } ]);
	};
	return [ data, addData ];
}

export default useAxios;
