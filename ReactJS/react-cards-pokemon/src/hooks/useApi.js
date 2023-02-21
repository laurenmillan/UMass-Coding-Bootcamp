import React, { useState } from 'react';
import axios from 'axios';

/** Logic for PokeDex.js, Axios API calls.
 * 
 * Since we use axios in a few components, let’s move this logic into a function called useAxios.
 * -useAxios should take in a URL, and similar to useState, it should return an array with two elements. 
 * -The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). 
 * -The second element is a function that will add a new object of data to our array.
 * 
 */

function useApi(baseURL) {
	const [ data, setData ] = useState([]);

	const addData = async (urlFragment) => {
		const response = await axios.get(urlFragment, { baseURL });
		setData((data) => [ ...data, response.data ]);
	};

	return [ data, addData ];
}

export default useApi;
