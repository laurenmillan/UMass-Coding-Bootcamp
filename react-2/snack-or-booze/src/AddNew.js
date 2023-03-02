import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ItemForm from './ItemForm';

const AddNew = ({ updateState, snacks, drinks }) => {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">Add an Item</h3>
						<ItemForm updateState={updateState} snacks={snacks} drinks={drinks} />
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
};

export default AddNew;
