import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Menu from './FoodMenu';
import Snack from './FoodItem';
import NotFound from './404';
import Add from './AddItem';

/** App logic.
 * 
 */

function App() {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ snacks, setSnacks ] = useState([]);
	const [ drinks, setDrinks ] = useState([]);

	useEffect(() => {
		async function getSnacks() {
			let snacks = await SnackOrBoozeApi.getSnacks();
			setSnacks(snacks);
			setIsLoading(false);
		}
		getSnacks();
	}, []);

	useEffect(() => {
		async function getDrinks() {
			let drinks = await SnackOrBoozeApi.getDrinks();
			setDrinks(drinks);
			setIsLoading(false);
		}
		getDrinks();
	}, []);

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
							<Home snacks={snacks} drinks={drinks} />
						</Route>

						<Route exact path="/snacks">
							<Menu snacks={snacks} title="Snacks" />
						</Route>

						<Route path="/snacks/:id">
							<Snack items={snacks} cantFind="/snacks" />
						</Route>

						<Route exact path="/drinks">
							<Menu drinks={drinks} title="Drinks" />
						</Route>

						<Route path="/drinks/:id">
							<Snack items={drinks} cantFind="/drinks" />
						</Route>

						<Route path="/add">
							<Add />
						</Route>

						<Route path="/*">
							<NotFound />
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
