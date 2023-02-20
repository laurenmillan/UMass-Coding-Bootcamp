import React, { useState } from 'react';

const Item = ({ id, name }) => {
	return (
		<ul>
			<li>Todo: {name}</li>
		</ul>
	);
};

export default Item;
