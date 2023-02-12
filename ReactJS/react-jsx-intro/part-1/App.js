// separate components
// this is an implicit return where we leave out the return keyword

const App = () => (
	<div>
		<FirstComponent />
		<NamedComponent name="name" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
