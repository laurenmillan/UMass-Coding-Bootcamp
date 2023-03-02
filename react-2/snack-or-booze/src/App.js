import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Menu from './FoodMenu';
import Snack from './FoodItem';
import NotFound from './404';
=======
import Menu from './Menu';
import Snack from './Item';
import AddNew from './AddNew';
>>>>>>> 1ed26b6bc4752d1c6145be2b6539c18bb15a4604

function App() {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ snacks, setSnacks ] = useState([]);
<<<<<<< HEAD

	useEffect(() => {
		async function getSnacks() {
			let snacks = await SnackOrBoozeApi.getSnacks();
			setSnacks(snacks);
=======
	const [ drinks, setDrinks ] = useState([]);

	useEffect(() => {
		async function getSnacks() {
			let snacks = await SnackOrBoozeApi.getSnacks('snacks');
			let drinks = await SnackOrBoozeApi.getSnacks('drinks');
			setSnacks(snacks);
			setSnacks(drinks);
>>>>>>> 1ed26b6bc4752d1c6145be2b6539c18bb15a4604
			setIsLoading(false);
		}
		getSnacks();
	}, []);

<<<<<<< HEAD
=======
	const updateState = (item) => {
		const { type, description, name, recipe, serve } = item;
		const id = name.toLowerCase().replace('', '-');
		if (type === 'snack') {
			setSnacks((snack) => [ ...snacks, { id, name, description, recipe, serve } ]);
		} else {
			setDrinks((drink) => [ ...drinks, { id, name, description, recipe, serve } ]);
		}
	};

>>>>>>> 1ed26b6bc4752d1c6145be2b6539c18bb15a4604
	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<Switch>
						<Route exact path="/">
<<<<<<< HEAD
							<Home snacks={snacks} />
						</Route>
						<Route exact path="/snacks">
							<Menu snacks={snacks} title="Snacks" />
=======
							<Home snacks={snacks} drinks={drinks} />
						</Route>
						<Route exact path="/home">
							<Home snacks={snacks} drinks={drinks} />
						</Route>

						<Route exact path="/snacks">
							<Menu items={snacks} path="snacks" title="Snacks" />
>>>>>>> 1ed26b6bc4752d1c6145be2b6539c18bb15a4604
						</Route>
						<Route path="/snacks/:id">
							<Snack items={snacks} cantFind="/snacks" />
						</Route>
<<<<<<< HEAD
						<Route path="/*">
							<NotFound />
						</Route>
						<Route>
							<p>Hmmm. I can't seem to find what you want.</p>
						</Route>
=======

						<Route exact path="/drinks">
							<Menu items={drinks} path="drinks" title="Drinks" />
						</Route>
						<Route path="/drinks/:id">
							<Drink items={drinks} cantFind="/drinks" />
						</Route>

						<Route path="/add">
							<AddNew updateState={updateState} snacks={snacks} drinks={drinks} />
						</Route>

						<Route path="/*">
							<NotFound />
						</Route>
>>>>>>> 1ed26b6bc4752d1c6145be2b6539c18bb15a4604
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
