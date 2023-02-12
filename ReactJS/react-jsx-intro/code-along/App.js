// separate components
// this is an implicit return where we leave out the return keyword

const App = () => (
	<div>
		<Cat />
		<SecondCat />
		<RandomNum />
		<Cat />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
