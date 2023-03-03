import React from 'react';
import ItemForm from './ItemForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/** Displays message to user that they added their item.
 * 
 * -This component passes a prop setData to its child component ItemForm.
 * 
 */

function AddItem() {
	const [ data, setData ] = useState('');

	if (data) {
		return (
			<section className="col-md-4">
				<div>
					<h3>You successfully added {data.name}!</h3>
					<Link className="font-weight-bold text-center" to="/">
						Go Home
					</Link>
				</div>
			</section>
		);
	}
	return <ItemForm setData={setData} />;
}

export default AddItem;
